import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-[1200px] px-4 sm:px-6 pb-10">
      <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 text-sm text-muted-foreground md:flex-row">
        <Logo />
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} HighestWash — A product of Genesis Holdings Inc., USA
        </p>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
