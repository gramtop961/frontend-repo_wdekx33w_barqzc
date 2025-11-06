import { motion } from "framer-motion";

const partners = [
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/HubSpot_Logo.svg" },
  { name: "Twilio", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-neutral-500">Trusted by teams partnering with</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-8">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              <img src={p.logo} alt={`${p.name} logo`} className="h-8 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
