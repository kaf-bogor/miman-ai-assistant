import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().trim().email("Masukkan email yang valid").max(255);

interface EmailFormProps {
  className?: string;
}

const EmailForm = ({ className = "" }: EmailFormProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setLoading(true);
    try {
      const body = new URLSearchParams();
      body.set("form-name", "early-access");
      body.set("email", result.data);

      const res = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      if (!res.ok) {
        const message = await res.text().catch(() => "");
        throw new Error(message || "Gagal mengirim. Coba lagi ya.");
      }

      setSubmitted(true);
    } catch {
      setError("Gagal mengirim. Coba lagi ya.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 bg-whatsapp-light border border-accent/20 rounded-xl px-5 py-4"
          >
            <CheckCircle className="text-accent shrink-0" size={22} />
            <p className="text-sm font-medium text-foreground">
              Terima kasih! Kamu akan jadi yang pertama mencoba miman.id 🎉
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            name="early-access"
            data-netlify="true"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input type="hidden" name="form-name" value="early-access" />
            <div className="flex-1">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Masukkan email kamu"
                className={`w-full px-4 py-3 rounded-xl bg-card border text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${
                  error ? "border-destructive" : "border-border"
                }`}
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive text-xs mt-1.5 ml-1"
                >
                  {error}
                </motion.p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-bold shadow-button hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shrink-0 disabled:opacity-70"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  Join Early Access
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailForm;
