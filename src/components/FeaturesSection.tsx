import { motion } from "framer-motion";
import { Bot, MessageSquare, TrendingUp, ShoppingBag, BarChart3, RefreshCw } from "lucide-react";

const features = [
  { icon: Bot, label: "AI-Powered Chatbot", desc: "Ditenagai AI yang belajar dari produk kamu" },
  { icon: MessageSquare, label: "WhatsApp Integration", desc: "Langsung connect ke WhatsApp Business" },
  { icon: TrendingUp, label: "Boost Conversion", desc: "Tingkatkan closing rate sampai 3x lipat" },
  { icon: ShoppingBag, label: "Product Recommendation", desc: "Rekomendasi produk secara otomatis" },
  { icon: BarChart3, label: "Analytics Dashboard", desc: "Laporan performa real-time" },
  { icon: RefreshCw, label: "Auto Follow-up", desc: "Follow-up otomatis customer yang belum beli" },
];

const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Fitur</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Semua yang kamu butuhkan
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-background rounded-2xl p-6 border border-border shadow-card text-center hover:shadow-soft transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-1.5">{f.label}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
