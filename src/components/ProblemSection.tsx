import { motion } from "framer-motion";
import { MessageCircleX, Clock, UserX, Repeat } from "lucide-react";

const problems = [
  {
    icon: MessageCircleX,
    title: "Capek balas chat satu-satu",
    desc: "Puluhan chat masuk tiap hari, semua harus dijawab manual satu per satu.",
  },
  {
    icon: Clock,
    title: "Slow response bikin customer kabur",
    desc: "Pelanggan nggak mau nunggu lama. Telat balas = kehilangan penjualan.",
  },
  {
    icon: UserX,
    title: "Admin kewalahan",
    desc: "Tim admin kecil harus handle ratusan chat bersamaan.",
  },
  {
    icon: Repeat,
    title: "Pertanyaan yang sama berulang-ulang",
    desc: '"Stok ada?", "Ongkir berapa?", "Ready nggak?" — terus-menerus.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProblemSection = () => {
  return (
    <section id="masalah" className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Masalah</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Kenapa jualan online itu capek?
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="bg-background rounded-2xl p-6 border border-border shadow-card hover:shadow-soft transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <p.icon className="text-destructive" size={22} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
