import { motion } from "framer-motion";
import { Camera, Gavel, CheckCircle2, Bike } from "lucide-react";
import headlineHow from "@/assets/headline-how.png";
import stepPhoto from "@/assets/step-photo.jpg";
import stepBids from "@/assets/step-bids.jpg";
import stepAccept from "@/assets/step-accept.jpg";
import stepRider from "@/assets/step-rider.jpg";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
}

const steps: Step[] = [
  {
    icon: Camera,
    title: "Snap a Pic",
    desc: "Open the app, choose your service, and take a photo of your laundry pile.",
    img: stepPhoto,
  },
  {
    icon: Gavel,
    title: "Bidding War",
    desc: "Up to 4 trusted local merchants send their best price in real time.",
    img: stepBids,
  },
  {
    icon: CheckCircle2,
    title: "Accept Your Price",
    desc: "Pick the offer that fits your budget. We instantly assign a rider.",
    img: stepAccept,
  },
  {
    icon: Bike,
    title: "Rider Collects",
    desc: "A friendly rider picks up within the hour. Track every step live.",
    img: stepRider,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.img
          src={headlineHow}
          alt="How HighestWash works"
          loading="lazy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-2xl h-auto select-none drop-shadow-[0_6px_20px_rgba(37,99,235,0.15)]"
          draggable={false}
        />
        <p className="mt-4 text-muted-foreground">Four taps from chaos to clean.</p>
      </motion.div>

      <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative glass overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={640}
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
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
