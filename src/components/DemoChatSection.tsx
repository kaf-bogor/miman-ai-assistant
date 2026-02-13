import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const messages = [
  { from: "customer", text: "Ka, stok sepatu ukuran 42 ada?" },
  { from: "ai", text: "Ada kak 😊 Untuk ukuran 42 tersedia warna hitam dan putih. Mau saya bantu checkout?" },
  { from: "customer", text: "Yang hitam dong, berapa harganya?" },
  { from: "ai", text: "Sepatu Sneaker Pro ukuran 42 warna hitam harganya Rp349.000 kak. Free ongkir Jabodetabek! Mau langsung order? 🛒" },
];

const DemoChatSection = () => {
  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Demo</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Lihat AI-nya beraksi
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Begini percakapan AI miman.id dengan pelanggan kamu di WhatsApp.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          {/* Phone frame */}
          <div className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden">
            {/* Header */}
            <div className="bg-accent px-5 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
                <Bot className="text-primary-foreground" size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-accent-foreground">miman.id Bot</p>
                <p className="text-xs text-accent-foreground/70">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 bg-whatsapp-light min-h-[280px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === "customer"
                        ? "bg-whatsapp-bubble text-foreground rounded-tr-md"
                        : "bg-card text-foreground rounded-tl-md shadow-sm border border-border"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoChatSection;
