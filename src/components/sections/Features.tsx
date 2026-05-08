import { motion } from "framer-motion";
import {
  MessageSquare,
  ShieldCheck,
  Clock,
  MapPin,
  Gavel,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import headlineFeatures from "@/assets/headline-features.png";
import featureClean from "@/assets/feature-clean.jpg";

interface Feature {
  icon: LucideIcon;
  t: string;
  d: string;
}

const features: Feature[] = [
  {
    icon: MessageSquare,
    t: "Real-time messaging",
    d: "Chat directly with merchants and your rider, with photos and updates.",
  },
  {
    icon: ShieldCheck,
    t: "Vetted merchants",
    d: "Every wash partner is verified, rated and insured for your peace of mind.",
  },
  {
    icon: Clock,
    t: "Same-day turnaround",
    d: "Most orders are washed, dried, folded and back to you within hours.",
  },
  {
    icon: MapPin,
    t: "Live rider tracking",
    d: "Watch your laundry's journey on the map from pickup to doorstep.",
  },
  {
    icon: Gavel,
    t: "You set the market",
    d: "Competitive bidding means you always pay a fair, transparent price.",
  },
  {
    icon: Sparkles,
    t: "Premium services",
    d: "Wash & fold, dry cleaning, ironing, delicates and shoe care.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-12 sm:py-20"
    >
      <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl glass aspect-[4/3]"
        >
          <img
            src={featureClean}
            alt="Fresh folded laundry"
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={headlineFeatures}
            alt="Built for the way you live."
            loading="lazy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-xl h-auto select-none drop-shadow-[0_6px_20px_rgba(37,99,235,0.15)]"
            draggable={false}
          />
          <p className="mt-4 text-muted-foreground">
            Every detail crafted to give you back your time, fresh.
          </p>
        </motion.div>
      </div>

      <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className="glass rounded-2xl p-5 sm:p-6"
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
