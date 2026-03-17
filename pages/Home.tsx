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
    }, 2600);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  const headline = useMemo(
    () => ['We', 'craft', 'sensibly', 'different', 'digital', 'products.'],
    []
  );

  const cards = [
    { title: 'Brand Platforms', text: 'Digital experiences with strong identity and measurable conversion.' },
    { title: 'Interactive Content', text: 'Narrative pages and product storytelling with motion that feels intentional.' },
    { title: 'Growth Systems', text: 'Analytics-ready architecture for teams scaling product and marketing together.' }
  ];

  return (
    <div className="min-h-screen bg-transparent text-foreground editorial-grid">
      <IntroOverlay show={showIntro} />
      <Header />

      <main className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl pb-24 pt-16 lg:pb-28 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Creative Digital Studio
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h1 className="heading-display text-[3rem] font-extrabold leading-[0.92] text-black sm:text-[4.4rem] lg:text-[6.5rem]">
                <span className="block overflow-hidden">
                  <motion.span
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } }
                    }}
                    className="inline-flex flex-wrap gap-x-3"
                  >
                    {headline.slice(0, 2).map((word) => (
                      <motion.span
                        key={word}
                        variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
                        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.06, delayChildren: 0.34 } }
                    }}
                    className="inline-flex flex-wrap gap-x-3"
                  >
                    {headline.slice(2, 4).map((word) => (
                      <motion.span
                        key={word}
                        variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
                        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.span>
                </span>
                <span className="block overflow-hidden text-emerald-700">
                  <motion.span
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.06, delayChildren: 0.48 } }
                    }}
                    className="inline-flex flex-wrap gap-x-3"
                  >
                    {headline.slice(4).map((word) => (
                      <motion.span
                        key={word}
                        variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
                        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.span>
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
                Point of encounter between design, strategy and technical execution. We build bold interfaces with strong character and real business outcomes.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black/85"
                >
                  Start Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-xl border border-black/20 bg-white/75 px-7 py-3.5 text-sm font-semibold text-black transition hover:border-black"
                >
                  View Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-xl">
                <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-black/60">Distinctions</p>
                  <Award className="h-4 w-4 text-emerald-700" />
                </div>
                <div className="space-y-5 text-sm text-black/75">
                  <p>Awwwards - Honorable Mention</p>
                  <p>CSSDA - Special Kudos</p>
                  <p>SiteInspire - Featured Project</p>
                </div>
                <div className="mt-9 rounded-2xl bg-black px-4 py-4 text-sm text-white">
                  100+ digital projects delivered with design precision.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 pb-24 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group rounded-3xl border border-black/10 bg-white/75 p-8 transition hover:-translate-y-1 hover:border-black/25"
            >
              <p className="mb-8 text-xs uppercase tracking-[0.2em] text-black/45">0{index + 1}</p>
              <h3 className="heading-display text-2xl font-bold leading-tight text-black">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-black/60">{card.text}</p>
              <MoveUpRight className="mt-10 h-5 w-5 text-black/40 transition group-hover:text-emerald-700" />
            </motion.article>
          ))}
        </section>

        <section className="mx-auto mb-24 max-w-7xl rounded-[2.2rem] border border-black/10 bg-black px-8 py-12 text-white md:px-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/55">No boring digital experiences</p>
            <h2 className="heading-display mt-5 max-w-4xl text-4xl font-extrabold leading-[0.94] md:text-6xl">
              Creative, technical, and just impertinent enough to stand out.
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Talk to us
              </Link>
              <Link
                to="/login"
                className="rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                See capabilities
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mb-20 max-w-7xl border-t border-black/15 pt-10">
          <p className="text-sm text-black/65">
            You will always be welcome. Built in React, animated with Framer Motion, designed to feel crafted instead of generic.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}