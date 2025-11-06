import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/60 via-rose-100/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-white/70 backdrop-blur">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">Let’s open your horizon</h3>
              <p className="mt-3 text-neutral-700">
                Share a few details and we’ll reach out with a tailored path to launch, plus warm intros where it matters.
              </p>
              <form className="mt-8 grid gap-4">
                <input type="text" placeholder="Your name" className="h-11 rounded-lg border border-neutral-300 px-4 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <input type="email" placeholder="Email" className="h-11 rounded-lg border border-neutral-300 px-4 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <textarea placeholder="What are you building?" rows={4} className="rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white h-11 font-medium hover:bg-neutral-800 transition"
                  type="button"
                  onClick={() => alert("Thanks! We'll be in touch shortly.")}
                >
                  Request intro
                </motion.button>
              </form>
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2069&auto=format&fit=crop"
                alt="Warm horizon"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/30 via-amber-400/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
