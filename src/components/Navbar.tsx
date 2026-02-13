import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-extrabold text-gradient">
          miman.id
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#masalah" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Masalah</a>
          <a href="#solusi" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solusi</a>
          <a href="#fitur" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Fitur</a>
          <a href="#demo" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Demo</a>
          <a
            href="#daftar"
            className="gradient-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold shadow-button hover:opacity-90 transition-opacity"
          >
            Join Early Access
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border px-6 pb-6 flex flex-col gap-4"
        >
          <a href="#masalah" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Masalah</a>
          <a href="#solusi" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Solusi</a>
          <a href="#fitur" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Fitur</a>
          <a href="#demo" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Demo</a>
          <a
            href="#daftar"
            className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center shadow-button"
            onClick={() => setMobileOpen(false)}
          >
            Join Early Access
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
