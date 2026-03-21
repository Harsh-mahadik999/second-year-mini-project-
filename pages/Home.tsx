import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, MoveUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import IntroOverlay from '../src/components/IntroOverlay';

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem('introPlayed') === 'true';
    if (played) {
      setShowIntro(false);
      return;
    }

    sessionStorage.setItem('introPlayed', 'true');
    setShowIntro(true);

    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  const cards = [
    { title: 'Structured Learning', text: 'Track your progress through carefully designed learning paths that adapt to your pace.' },
    { title: 'Real Skills Training', text: 'Practical exercises and projects that build real competencies for actual job applications.' },
    { title: 'Community Growth', text: 'Learn together with peers, share knowledge, and grow your professional network.' }
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-slate-900">
      <IntroOverlay show={showIntro} />
      <Header />

      <main className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl pb-20 pt-16 lg:pb-24 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-xs font-semibold text-amber-700 uppercase tracking-wider"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Learning Platform
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h1 className="heading-display text-4xl font-bold leading-tight text-amber-950 sm:text-5xl lg:text-6xl">
                Master Your Skills,<br />
                <span className="text-amber-700">Shape Your Future</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
                Join thousands of learners building real expertise. Learn, practice, and grow your career with structured guidance and real community support.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-xl bg-amber-700 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-amber-800"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-xl border border-amber-200 bg-white px-8 py-4 text-base font-semibold text-amber-900 transition hover:bg-amber-50"
                >
                  Explore More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-lg">
                <div className="mb-8 flex items-center justify-between border-b border-amber-100 pb-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">Achievements</p>
                  <Award className="h-5 w-5 text-amber-700" />
                </div>
                <div className="space-y-5 text-sm text-slate-700">
                  <p className="font-medium">✓ Complete skill paths</p>
                  <p className="font-medium">✓ Real-world projects</p>
                  <p className="font-medium">✓ Community recognition</p>
                </div>
                <div className="mt-8 rounded-xl bg-amber-700 px-6 py-5 text-base font-medium text-white">
                  Join 10,000+ learners advancing their careers
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 pb-24 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-amber-100 bg-white p-8 transition hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100"
            >
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-700 text-white font-semibold">
                {index + 1}
              </div>
              <h3 className="heading-display text-xl font-bold text-amber-950">{card.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700">{card.text}</p>
              <div className="mt-6 flex items-center text-amber-700 transition group-hover:translate-x-1">
                <MoveUpRight className="h-4 w-4" />
              </div>
            </motion.article>
          ))}
        </section>

        <section className="mx-auto mb-24 max-w-7xl rounded-2xl border border-amber-100 bg-slate-900 px-8 py-16 text-white md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Ready to Level Up?</p>
            <h2 className="heading-display mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Start learning today and build the skills employers want.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Join our community of learners and start your journey towards mastery and career growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="rounded-xl bg-amber-700 px-8 py-3 text-base font-semibold text-white transition hover:bg-amber-800"
              >
                Begin Learning
              </Link>
              <Link
                to="/login"
                className="rounded-xl border border-slate-600 px-8 py-3 text-base font-semibold text-white transition hover:border-amber-400 hover:bg-amber-700/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mb-20 max-w-7xl border-t border-amber-100 pt-12">
          <p className="text-base text-slate-700">
            Built with React and Framer Motion. Designed for learners who want a platform that actually cares about their growth.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}