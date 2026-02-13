import { motion } from "framer-motion";
import EmailForm from "./EmailForm";
import heroChatMockup from "@/assets/hero-chat-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 gradient-hero overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-[-10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-[-5%] w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              Coming Soon — Early Access
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-tight tracking-tight text-foreground mb-5">
              AI Chatbot yang Bantu Online Shop{" "}
              <span className="text-gradient">Jualan Otomatis 24/7</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Balas chat pelanggan secara otomatis, tingkatkan penjualan, dan
              hemat waktu admin. Asisten sales AI pintar untuk UMKM Indonesia.
            </p>

            <EmailForm className="max-w-lg" />

            <p className="text-xs text-muted-foreground mt-4">
              Gratis untuk early adopters. Tanpa kartu kredit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={heroChatMockup}
              alt="miman.id AI chatbot preview menampilkan percakapan otomatis di WhatsApp"
              className="w-full max-w-sm animate-float drop-shadow-2xl"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
