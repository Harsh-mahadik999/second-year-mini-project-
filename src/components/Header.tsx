import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Skills', href: '/skills' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Arcade', href: '/arcade' },
    { name: 'Community', href: '/community' },
    { name: 'Market Intel', href: '/market' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white text-xs font-bold">
              LA
            </div>
            <span className="heading-display text-xl font-extrabold text-black">
              Les Studio
            </span>
          </Link>

          {isLoggedIn && (
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-black'
                      : 'text-black/60 hover:text-black'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-black"
                    />
                  )}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <button className="rounded-lg border border-black/15 bg-white/70 p-2 text-black/70 transition-colors hover:bg-white">
                  <User className="w-4 h-4" />
                </button>
                <button
                  onClick={handleLogout}
                  className="rounded-lg border border-black/15 bg-white/70 p-2 text-black/70 transition-colors hover:bg-white"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-black/65 hover:text-black transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/85"
                >
                  Contact
                </Link>
              </div>
            )}

            {isLoggedIn && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-lg border border-black/15 bg-white/70 p-2 text-black/70 transition-colors hover:bg-white md:hidden"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && isLoggedIn && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-black/10 py-4 md:hidden"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-black text-white'
                      : 'text-black/60 hover:bg-black/5 hover:text-black'
                  } rounded-lg mb-1`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;