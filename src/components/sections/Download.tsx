import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import headlineCta from "@/assets/headline-cta.png";
import ctaBg from "@/assets/cta-bg.jpg";

export function Download() {
  return (
    <section
      id="download"
      className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-12 sm:py-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-strong relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-12 text-center md:p-16"
      >
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80" />

        <div className="relative">
          <motion.img
            src={headlineCta}
            alt="Download the app. Start saving today."
            loading="lazy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-3xl h-auto select-none drop-shadow-[0_6px_20px_rgba(37,99,235,0.15)]"
            draggable={false}
          />
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Available for Customers, Merchants and Riders on iOS and Android.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-semibold text-background transition hover:scale-105"
            >
              <Apple className="h-5 w-5" /> App Store
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground glow transition hover:scale-105"
            >
              <Play className="h-5 w-5" /> Google Play
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
