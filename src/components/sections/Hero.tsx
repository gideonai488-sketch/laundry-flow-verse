import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import heroPerson from "@/assets/hero-person.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import owlLogo from "@/assets/owl-logo.png";

const stats = [
  { v: "<60s", l: "Avg. bid time" },
  { v: "4 pros", l: "Compete per job" },
  { v: "1 hr", l: "Pickup window" },
  { v: "100%", l: "Tracked & insured" },
];

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 pt-6 pb-12 sm:pt-8 sm:pb-20 md:pt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-accent shadow-[0_30px_80px_-30px_rgba(37,99,235,0.5)]"
      >
        <video
          src={(heroVideo as { url: string }).url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-soft-light"
        />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent/40 blur-3xl" />

        <div className="relative grid items-center gap-6 p-5 sm:p-8 md:grid-cols-2 md:gap-4 md:p-10 lg:p-14">
          <div className="text-primary-foreground">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium text-white"
            >
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              A product of Genesis Holdings Inc., USA
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              On-demand laundry,
              <br />
              designed just for you.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-5 max-w-md text-base text-white/85 md:text-lg"
            >
              Snap a photo. Get up to 4 live bids from trusted local pros. Accept
              the price you love — a rider collects within the hour.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#download"
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary shadow-lg transition hover:scale-105"
              >
                <Apple className="h-4 w-4" /> App Store
              </a>
              <a
                href="#download"
                className="flex items-center gap-2 rounded-xl bg-white/15 backdrop-blur px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:scale-105 hover:bg-white/25"
              >
                <Play className="h-4 w-4" /> Google Play
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm md:max-w-none"
          >
            <motion.img
              src={heroPerson}
              alt="Happy customer holding fresh folded laundry"
              width={1024}
              height={1024}
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur px-3 py-2 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <img src={owlLogo} alt="" width={28} height={28} />
              <div className="text-xs">
                <div className="font-bold text-foreground">HighestWash</div>
                <div className="text-muted-foreground">Wise. Wash. Win.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="glass rounded-2xl p-4 sm:p-5 text-left"
          >
            <div className="text-xl sm:text-2xl font-bold text-gradient">{s.v}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
