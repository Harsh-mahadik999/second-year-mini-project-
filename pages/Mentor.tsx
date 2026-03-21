import React from 'react';
import { motion } from 'framer-motion';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ChatBot from '../src/components/ChatBot';
import PageIntroOverlay from '../src/components/PageIntroOverlay';

export default function Mentor() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <PageIntroOverlay title="AI Career Mentor" subtitle="Your Personal AI Guide" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-amber-700">AI Career</span> Mentor
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mb-6">
              Chat with your personal AI mentor to get guidance on career paths, skills development, interview prep, 
              industry trends, and personalized recommendations for your tech journey.
            </p>
            <div className="h-px bg-gradient-to-r from-amber-600 via-amber-400 to-transparent w-32 mb-12" />
          </div>

          <div className="bg-white rounded-xl border border-amber-100 shadow-lg overflow-hidden">
            <ChatBot />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
