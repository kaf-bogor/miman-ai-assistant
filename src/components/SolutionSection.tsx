import { motion } from "framer-motion";
import { Bot, Brain, ShoppingBag, MessageSquare, LayoutDashboard } from "lucide-react";

const solutions = [
  { icon: Bot, title: "AI balas otomatis", desc: "Respon instan 24/7, pelanggan nggak perlu nunggu." },
  { icon: Brain, title: "Paham konteks produk", desc: "AI mengerti katalog produk kamu dan bisa jawab detail." },
  { icon: ShoppingBag, title: "Rekomendasi barang", desc: "Suggest produk yang tepat berdasarkan kebutuhan customer." },
  { icon: MessageSquare, title: "Integrasi WhatsApp", desc: "Langsung terhubung ke WhatsApp, platform favorit pelanggan." },
  { icon: LayoutDashboard, title: "Dashboard simpel", desc: "Pantau semua percakapan dan performa di satu tempat." },
];

const SolutionSection = () => {
  return (
    <section id="solusi" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Solusi</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Kenalan sama <span className="text-gradient">miman.id</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Asisten sales AI yang kerja 24 jam tanpa libur, tanpa gaji bulanan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 bg-card rounded-2xl p-6 border border-border shadow-card"
            >
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                <s.icon className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
