import { motion } from "framer-motion";
import owlLogo from "@/assets/owl-logo.png";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <motion.img
        src={owlLogo}
        alt="HighestWash owl logo"
        width={size}
        height={size}
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
