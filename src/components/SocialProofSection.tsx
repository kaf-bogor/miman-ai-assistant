import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rina S.",
    role: "Owner, Rina Fashion",
    text: "Sejak pakai miman.id, saya bisa fokus packing orderan. Chat dijawab otomatis dan customer senang!",
  },
  {
    name: "Budi P.",
    role: "Seller Tokopedia",
    text: "Response time jadi instan. Conversion rate naik karena customer nggak kabur lagi.",
  },
  {
    name: "Dewi A.",
    role: "Owner, Dewi Skincare",
    text: "Admin saya cuma 1 orang tapi bisa handle ratusan chat per hari. Game changer!",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimoni</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Dipercaya UMKM Indonesia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-6 border border-border shadow-card"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
