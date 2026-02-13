import { motion } from "framer-motion";
import EmailForm from "./EmailForm";

const FinalCTASection = () => {
  return (
    <section id="daftar" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-[0.04]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Siap Punya Admin AI Sendiri?
          </h2>
          <p className="text-muted-foreground mb-8">
            Daftar sekarang dan jadi yang pertama mencoba miman.id. Gratis untuk early adopters!
          </p>
          <EmailForm className="max-w-md mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
