import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Skills from './pages/Skills';
import Roadmap from './pages/Roadmap';
import Arcade from './pages/Arcade';
import Community from './pages/Community';
import Market from './pages/Market';
import Mentor from './pages/Mentor';
import NotFound from './pages/NotFound';

const pageTransition = {
  initial: { opacity: 0, y: 18, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(3px)' }
};

const RouteShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RouteShell><Home /></RouteShell>} />
        <Route path="/login" element={<RouteShell><Login /></RouteShell>} />
        <Route path="/signup" element={<RouteShell><Signup /></RouteShell>} />
        <Route path="/dashboard" element={<RouteShell><Dashboard /></RouteShell>} />
        <Route path="/skills" element={<RouteShell><Skills /></RouteShell>} />
        <Route path="/roadmap" element={<RouteShell><Roadmap /></RouteShell>} />
        <Route path="/arcade" element={<RouteShell><Arcade /></RouteShell>} />
        <Route path="/community" element={<RouteShell><Community /></RouteShell>} />
        <Route path="/market" element={<RouteShell><Market /></RouteShell>} />
        <Route path="/mentor" element={<RouteShell><Mentor /></RouteShell>} />
        <Route path="*" element={<RouteShell><NotFound /></RouteShell>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen font-sans">
          <AnimatedRoutes />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="dark"
          />
        </main>
      </Router>
    </Theme>
  );
}

export default App;