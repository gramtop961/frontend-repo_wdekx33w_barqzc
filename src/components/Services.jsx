import { Users, Rocket, Target, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Rocket,
    title: "Go-to-Market Sprint",
    desc: "From positioning to first customers, we guide your launch with a sharp, action-led plan.",
  },
  {
    icon: Users,
    title: "Investor & Mentor Network",
    desc: "Tap into warm intros across angels, VCs and operators who’ve built category leaders.",
  },
  {
    icon: Target,
    title: "Product-Market Fit Coaching",
    desc: "Structured experimentation and feedback loops to converge on what customers love.",
  },
  {
    icon: LineChart,
    title: "Scale Foundations",
    desc: "Pricing, onboarding, analytics and hiring playbooks tailored to your stage.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-amber-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Services that open horizons
          </h2>
          <p className="mt-3 text-neutral-700">
            Practical programs backed by a trusted network to help you find your place on the market.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 text-white grid place-items-center">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
