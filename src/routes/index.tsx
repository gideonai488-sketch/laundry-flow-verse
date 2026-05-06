import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Camera, Gavel, CheckCircle2, Bike, MessageSquare, Sparkles,
  ShoppingBag, Store, Truck, Apple, Play, ShieldCheck, Clock, MapPin
} from "lucide-react";
import owlLogo from "@/assets/owl-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import heroPerson from "@/assets/hero-person.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import headlineHero from "@/assets/headline-text.png";
import headlineHow from "@/assets/headline-how.png";
import headlineApps from "@/assets/headline-apps.png";
import headlineFeatures from "@/assets/headline-features.png";
import headlineCta from "@/assets/headline-cta.png";
import stepPhoto from "@/assets/step-photo.jpg";
import stepBids from "@/assets/step-bids.jpg";
import stepAccept from "@/assets/step-accept.jpg";
import stepRider from "@/assets/step-rider.jpg";
import appCustomer from "@/assets/app-customer.jpg";
import appMerchant from "@/assets/app-merchant.jpg";
import appRider from "@/assets/app-rider.jpg";
import featureClean from "@/assets/feature-clean.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "HighestWash — On-Demand Laundry. Name Your Price." },
      { name: "description", content: "HighestWash by Genesis Holdings Inc. Snap your laundry, get up to 4 live bids from local pros, accept the best price, and a rider picks up within the hour." },
    ],
  }),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  }),
};

function AnimatedHeading({ src, alt, className = "", delay = 0 }: { src: string; alt: string; className?: string; delay?: number }) {
  return (
    <motion.h1
      className={className}
      aria-label={alt}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-auto select-none drop-shadow-[0_8px_24px_rgba(37,99,235,0.18)]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        draggable={false}
      />
    </motion.h1>
  );
}

function SectionHeading({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto h-auto select-none drop-shadow-[0_6px_20px_rgba(37,99,235,0.15)] ${className}`}
      draggable={false}
    />
  );
}

function Blobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-blob absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl" />
      <div className="animate-blob absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" style={{ animationDelay: "-6s" }} />
      <div className="animate-blob absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-chart-3/30 blur-3xl" style={{ animationDelay: "-12s" }} />
    </div>
  );
}

function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <motion.img
        src={owlLogo} alt="HighestWash owl logo" width={size} height={size}
        className="drop-shadow-md"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-lg font-bold tracking-tight">
        Highest<span className="text-gradient">Wash</span>
      </span>
    </div>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
      className="sticky top-2 sm:top-4 z-50 mx-auto mt-2 sm:mt-4 flex w-[min(1200px,calc(100%-1rem))] sm:w-[min(1200px,calc(100%-2rem))] items-center justify-between rounded-2xl glass-strong px-3 py-2 sm:px-5 sm:py-3"
    >
      <Logo />
      <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
        <a href="#how" className="hover:text-foreground transition">How it works</a>
        <a href="#apps" className="hover:text-foreground transition">Apps</a>
        <a href="#features" className="hover:text-foreground transition">Features</a>
        <a href="#download" className="hover:text-foreground transition">Download</a>
      </nav>
      <a href="#download" className="rounded-xl bg-gradient-to-r from-primary to-accent px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-primary-foreground glow transition hover:scale-105 whitespace-nowrap">
        Get the App
      </a>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto w-[min(1200px,calc(100%-1rem))] sm:w-[min(1200px,calc(100%-2rem))] pt-6 pb-12 sm:pt-8 sm:pb-20 md:pt-12">
      {/* Grey-style hero card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-accent shadow-[0_30px_80px_-30px_rgba(37,99,235,0.5)]"
      >
        {/* Soft texture / video accent behind */}
        <video
          src={heroVideo.url} autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-soft-light"
        />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent/40 blur-3xl" />

        <div className="relative grid items-center gap-6 p-5 sm:p-6 md:grid-cols-2 md:gap-4 md:p-10 lg:p-14">
          {/* Left: copy */}
          <div className="text-primary-foreground">
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium text-white"
            >
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              A product of Genesis Holdings Inc., USA
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              On-demand laundry,<br />designed just for you.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-5 max-w-md text-base text-white/85 md:text-lg"
            >
              Snap a photo. Get up to 4 live bids from trusted local pros.
              Accept the price you love — a rider collects within the hour.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#download" className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary shadow-lg transition hover:scale-105">
                <Apple className="h-4 w-4" /> App Store
              </a>
              <a href="#download" className="flex items-center gap-2 rounded-xl bg-white/15 backdrop-blur px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:scale-105 hover:bg-white/25">
                <Play className="h-4 w-4" /> Google Play
              </a>
            </motion.div>
          </div>

          {/* Right: person image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md md:max-w-none"
          >
            <motion.img
              src={heroPerson}
              alt="Happy customer holding fresh folded laundry"
              width={1024} height={1024}
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* tiny owl badge */}
            <motion.div
              className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur px-3 py-2 shadow-xl"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
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

      {/* stats */}
      <div className="relative mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-4">
        {[
          { v: "<60s", l: "Avg. bid time" },
          { v: "4 pros", l: "Compete per job" },
          { v: "1 hr", l: "Pickup window" },
          { v: "100%", l: "Tracked & insured" },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="glass rounded-2xl p-5 text-left"
          >
            <div className="text-2xl font-bold text-gradient">{s.v}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { icon: Camera, title: "Snap a Pic", desc: "Open the app, choose your service, and take a photo of your laundry pile.", img: stepPhoto },
  { icon: Gavel, title: "Bidding War", desc: "Up to 4 trusted local merchants send their best price in real time.", img: stepBids },
  { icon: CheckCircle2, title: "Accept Your Price", desc: "Pick the offer that fits your budget. We instantly assign a rider.", img: stepAccept },
  { icon: Bike, title: "Rider Collects", desc: "A friendly rider picks up within the hour. Track every step live.", img: stepRider },
];

function HowItWorks() {
  return (
    <section id="how" className="mx-auto w-[min(1200px,calc(100%-1rem))] sm:w-[min(1200px,calc(100%-2rem))] py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} className="mx-auto max-w-2xl text-center"
      >
        <SectionHeading src={headlineHow} alt="How HighestWash works" className="w-full max-w-2xl" />
        <p className="mt-4 text-muted-foreground">Four taps from chaos to clean.</p>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative glass overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={s.img} alt={s.title} loading="lazy" width={1024} height={640}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground glow">
                {i + 1}
              </div>
              <div className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-2xl glass-strong">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const apps = [
  {
    icon: ShoppingBag, name: "Customer App", img: appCustomer,
    desc: "Post a job, compare live bids, chat, pay and track your rider in real time.",
    points: ["Photo-based ordering", "Live bidding feed", "In-app chat & tipping"],
  },
  {
    icon: Store, name: "Merchant App", img: appMerchant,
    desc: "Receive nearby jobs, send a competitive bid in seconds, and grow your wash business.",
    points: ["Smart bid suggestions", "Capacity & schedule tools", "Instant payouts"],
  },
  {
    icon: Truck, name: "Rider App", img: appRider,
    desc: "Auto-assigned pickups, optimized routes, and live messaging with both sides.",
    points: ["Turn-by-turn navigation", "Proof of pickup", "Earnings dashboard"],
  },
];

function Apps() {
  return (
    <section id="apps" className="mx-auto w-[min(1200px,calc(100%-1rem))] sm:w-[min(1200px,calc(100%-2rem))] py-12 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
        <SectionHeading src={headlineApps} alt="Three apps. One ecosystem." className="w-full max-w-2xl" />
        <p className="mt-4 text-muted-foreground">Built for everyone in the laundry economy.</p>
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {apps.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="glass-strong relative flex flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={a.img} alt={a.name} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-4 left-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent glow">
                <a.icon className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1 p-7">
              <h3 className="text-2xl font-bold">{a.name}</h3>
              <p className="mt-2 text-muted-foreground">{a.desc}</p>
              <ul className="mt-5 space-y-2">
                {a.points.map(p => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const features = [
  { icon: MessageSquare, t: "Real-time messaging", d: "Chat directly with merchants and your rider, with photos and updates." },
  { icon: ShieldCheck, t: "Vetted merchants", d: "Every wash partner is verified, rated and insured for your peace of mind." },
  { icon: Clock, t: "Same-day turnaround", d: "Most orders are washed, dried, folded and back to you within hours." },
  { icon: MapPin, t: "Live rider tracking", d: "Watch your laundry's journey on the map from pickup to doorstep." },
  { icon: Gavel, t: "You set the market", d: "Competitive bidding means you always pay a fair, transparent price." },
  { icon: Sparkles, t: "Premium services", d: "Wash & fold, dry cleaning, ironing, delicates and shoe care." },
];

function Features() {
  return (
    <section id="features" className="mx-auto w-[min(1200px,calc(100%-1rem))] sm:w-[min(1200px,calc(100%-2rem))] py-12 sm:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl glass"
        >
          <img src={featureClean} alt="Fresh folded laundry" loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <SectionHeading src={headlineFeatures} alt="Built for the way you live." className="w-full max-w-xl mx-0" />
          <p className="mt-4 text-muted-foreground">Every detail crafted to give you back your time, fresh.</p>
        </motion.div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.t}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <f.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold">{f.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="mx-auto w-[min(1200px,calc(100%-1rem))] sm:w-[min(1200px,calc(100%-2rem))] py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="glass-strong relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 text-center md:p-16"
      >
        <img src={ctaBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80" />
        <div className="relative">
          <SectionHeading src={headlineCta} alt="Download the app. Start saving today." className="w-full max-w-3xl" />
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Available for Customers, Merchants and Riders on iOS and Android.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-semibold text-background transition hover:scale-105">
              <Apple className="h-5 w-5" /> App Store
            </a>
            <a href="#" className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground glow transition hover:scale-105">
              <Play className="h-5 w-5" /> Google Play
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto mt-10 w-[min(1200px,calc(100%-1rem))] sm:w-[min(1200px,calc(100%-2rem))] pb-10">
      <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 text-sm text-muted-foreground md:flex-row">
        <Logo />
        <p>© {new Date().getFullYear()} HighestWash — A product of Genesis Holdings Inc., USA</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Blobs />
      <Nav />
      <Hero />
      <HowItWorks />
      <Apps />
      <Features />
      <Download />
      <Footer />
    </div>
  );
}
