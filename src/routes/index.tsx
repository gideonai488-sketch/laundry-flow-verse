import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Camera, Gavel, CheckCircle2, Bike, MessageSquare, Sparkles,
  ShoppingBag, Store, Truck, Apple, Play, ShieldCheck, Clock, MapPin
} from "lucide-react";
import owlLogo from "@/assets/owl-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
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
      className="sticky top-4 z-50 mx-auto mt-4 flex w-[min(1200px,calc(100%-2rem))] items-center justify-between rounded-2xl glass-strong px-5 py-3"
    >
      <Logo />
      <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
        <a href="#how" className="hover:text-foreground transition">How it works</a>
        <a href="#apps" className="hover:text-foreground transition">Apps</a>
        <a href="#features" className="hover:text-foreground transition">Features</a>
        <a href="#download" className="hover:text-foreground transition">Download</a>
      </nav>
      <a href="#download" className="rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground glow transition hover:scale-105">
        Get the App
      </a>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto w-[min(1200px,calc(100%-2rem))] pt-12 pb-20 md:pt-20">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem]">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-70" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
      </div>

      <div className="grid items-center gap-10 px-2 md:grid-cols-2 md:px-6">
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            A product of Genesis Holdings Inc., USA
          </motion.span>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Wise laundry. <span className="text-gradient">Your price.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} custom={1} initial="hidden" animate="show"
            className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Snap a photo. Get up to 4 live bids from trusted local pros.
            Accept the price you love — a rider collects within the hour.
          </motion.p>

          <motion.div
            variants={fadeUp} custom={2} initial="hidden" animate="show"
            className="mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a href="#download" className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground glow transition hover:scale-105">
              <Apple className="h-5 w-5" /> App Store
            </a>
            <a href="#download" className="flex items-center gap-2 rounded-xl glass-strong px-6 py-3 font-semibold transition hover:scale-105">
              <Play className="h-5 w-5" /> Google Play
            </a>
          </motion.div>
        </div>

        {/* Animated owl */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl animate-pulse" />
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary glow" />
            <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent" />
            <div className="absolute left-1/2 bottom-0 h-3 w-3 -translate-x-1/2 rounded-full bg-chart-3" />
          </div>
          <motion.img
            src={owlLogo} alt="HighestWash owl mascot" width={512} height={512}
            className="relative h-full w-full object-contain"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* stats */}
      <div className="relative mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
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
    <section id="how" className="mx-auto w-[min(1200px,calc(100%-2rem))] py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-4xl font-bold md:text-5xl">How HighestWash works</h2>
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
    <section id="apps" className="mx-auto w-[min(1200px,calc(100%-2rem))] py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold md:text-5xl">Three apps. <span className="text-gradient">One ecosystem.</span></h2>
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
    <section id="features" className="mx-auto w-[min(1200px,calc(100%-2rem))] py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl glass"
        >
          <img src={featureClean} alt="Fresh folded laundry" loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold md:text-5xl">Built for the way <span className="text-gradient">you live.</span></h2>
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
    <section id="download" className="mx-auto w-[min(1200px,calc(100%-2rem))] py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="glass-strong relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16"
      >
        <img src={ctaBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80" />
        <div className="relative">
          <h2 className="text-4xl font-bold md:text-6xl">
            Download the app. <span className="text-gradient">Start saving today.</span>
          </h2>
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
    <footer className="mx-auto mt-10 w-[min(1200px,calc(100%-2rem))] pb-10">
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
