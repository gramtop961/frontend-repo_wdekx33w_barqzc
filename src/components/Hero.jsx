import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/v6m0V3gmcY2qkE4G/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900"
          >
            Launch faster with a powerful network and warm guidance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg text-neutral-700 max-w-2xl"
          >
            We help ambitious founders turn ideas into market-ready products through curated connections, strategic accompaniment, and trusted partners.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 h-12 font-medium shadow-lg shadow-rose-500/20 hover:brightness-105 transition"
            >
              Start your journey
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-xl border border-neutral-300 bg-white text-neutral-900 px-6 h-12 font-medium hover:bg-neutral-50 transition"
            >
              Explore services
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
