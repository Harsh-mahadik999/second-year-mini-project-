import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Chrome } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email === 'student@demo.com' && password === 'demo123') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        toast.success('Welcome back! Login successful.');
        navigate('/dashboard');
      } else {
        toast.error('Invalid credentials. Use student@demo.com / demo123');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', 'student@demo.com');
      toast.success('Google login successful!');
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
      <div className="pointer-events-none absolute -left-20 -top-16 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="glass-panel rounded-3xl border-white/70 p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500">
              <span className="text-xl font-bold text-white">NF</span>
            </div>
            <h1 className="heading-display mb-2 text-2xl font-bold text-slate-900">Welcome Back</h1>
            <p className="text-slate-600">Sign in to continue building with NovaFlow</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@demo.com"
                  className="w-full rounded-lg border border-slate-200 bg-white/80 py-3 pl-10 pr-4 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="demo123"
                  className="w-full rounded-lg border border-slate-200 bg-white/80 py-3 pl-10 pr-12 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white shadow-lg shadow-blue-300/30 transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-card px-2 text-slate-500">Or continue with</span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="mt-4 flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white/80 py-3 transition-all duration-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Google
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-700">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
            <p className="text-center text-sm text-blue-700">
              <strong>Demo Credentials:</strong><br />
              Email: student@demo.com<br />
              Password: demo123
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}