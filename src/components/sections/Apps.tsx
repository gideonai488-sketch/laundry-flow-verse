import { motion } from "framer-motion";
import { ShoppingBag, Store, Truck, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import headlineApps from "@/assets/headline-apps.png";
import appCustomer from "@/assets/app-customer.jpg";
import appMerchant from "@/assets/app-merchant.jpg";
import appRider from "@/assets/app-rider.jpg";

interface AppCard {
  icon: LucideIcon;
  name: string;
  img: string;
  desc: string;
  points: string[];
}

const apps: AppCard[] = [
  {
    icon: ShoppingBag,
    name: "Customer App",
    img: appCustomer,
    desc: "Post a job, compare live bids, chat, pay and track your rider in real time.",
    points: ["Photo-based ordering", "Live bidding feed", "In-app chat & tipping"],
  },
  {
    icon: Store,
    name: "Merchant App",
    img: appMerchant,
    desc: "Receive nearby jobs, send a competitive bid in seconds, and grow your wash business.",
    points: ["Smart bid suggestions", "Capacity & schedule tools", "Instant payouts"],
  },
  {
    icon: Truck,
    name: "Rider App",
    img: appRider,
    desc: "Auto-assigned pickups, optimised routes, and live messaging with both sides.",
    points: ["Turn-by-turn navigation", "Proof of pickup", "Earnings dashboard"],
  },
];

export function Apps() {
  return (
    <section id="apps" className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.img
          src={headlineApps}
          alt="Three apps. One ecosystem."
          loading="lazy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-2xl h-auto select-none drop-shadow-[0_6px_20px_rgba(37,99,235,0.15)]"
          draggable={false}
        />
        <p className="mt-4 text-muted-foreground">Built for everyone in the laundry economy.</p>
      </motion.div>

      <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="glass-strong relative flex flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={a.img}
                alt={a.name}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-4 left-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent glow">
                <a.icon className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1 p-5 sm:p-7">
              <h3 className="text-xl sm:text-2xl font-bold">{a.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
              <ul className="mt-4 sm:mt-5 space-y-2">
                {a.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {p}
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
