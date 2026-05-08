import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { Blobs } from "@/components/layout/Blobs";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — HighestWash" },
      { name: "description", content: "Learn how HighestWash collects, uses, and protects your personal data." },
      { name: "robots", content: "index, follow" },
    ],
  }),
});

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "**Account Information:** Name, email address, phone number, and password when you register.",
      "**Profile & Service Data:** Photos of laundry items, service preferences, delivery addresses, and payment method details (processed securely via our payment provider — we never store full card numbers).",
      "**Location Data:** With your permission, precise or approximate location to match you with nearby merchants and riders.",
      "**Usage Data:** Pages visited, features used, search queries, app interactions, crash reports, and performance logs.",
      "**Communications:** Messages exchanged between customers, merchants, and riders within the platform.",
      "**Device Data:** Device type, operating system, unique device identifiers, IP address, and browser type.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "Provide, operate, and improve the HighestWash platform and its three-app ecosystem.",
      "Match customers with available merchants and assign riders to orders.",
      "Process payments and send transaction confirmations.",
      "Send order updates, notifications, and customer support responses.",
      "Personalise your experience and show relevant offers.",
      "Monitor platform safety, detect fraud, and enforce our Terms of Service.",
      "Comply with applicable laws and legal obligations.",
    ],
  },
  {
    title: "3. Sharing Your Information",
    content: [
      "**With Other Users:** Customer name, rating, and general area are shared with merchants bidding on your order. Rider name, photo, and live location are shared during active pickups.",
      "**Service Providers:** Payment processors, cloud hosting providers, analytics services, and customer support tools that operate under data processing agreements.",
      "**Legal Requirements:** We may disclose information if required by law, court order, or to protect the rights and safety of users or the public.",
      "**Business Transfers:** In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.",
      "We do not sell your personal information to third-party advertisers.",
    ],
  },
  {
    title: "4. Data Retention",
    content: [
      "We retain your account data for as long as your account is active or as needed to provide our services.",
      "Order history is retained for up to 7 years to comply with financial and tax regulations.",
      "You may request deletion of your account and associated personal data at any time by contacting privacy@highestwash.com. Some data may be retained where legally required.",
    ],
  },
  {
    title: "5. Cookies & Tracking",
    content: [
      "We use essential cookies to keep you logged in and remember your preferences.",
      "Analytics cookies (e.g. aggregated usage statistics) help us understand how the platform is used and improve it.",
      "You can manage or disable non-essential cookies through your browser settings. Disabling essential cookies may affect platform functionality.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "**Access:** Request a copy of the personal data we hold about you.",
      "**Correction:** Ask us to correct inaccurate or incomplete data.",
      "**Deletion:** Request erasure of your personal data, subject to legal retention requirements.",
      "**Portability:** Receive your data in a structured, machine-readable format.",
      "**Objection:** Object to processing based on legitimate interests.",
      "To exercise any of these rights, contact us at privacy@highestwash.com. We will respond within 30 days.",
    ],
  },
  {
    title: "7. Security",
    content: [
      "We use industry-standard encryption (TLS in transit, AES-256 at rest) and access controls to protect your data.",
      "Payment information is handled by PCI-DSS-compliant processors.",
      "No system is completely secure. If you believe your account has been compromised, contact support@highestwash.com immediately.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "HighestWash is not directed at children under 16 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of material changes via email or an in-app notice at least 14 days before the change takes effect.",
      "Continued use of HighestWash after changes take effect constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "**Privacy enquiries:** privacy@highestwash.com",
      "**General support:** support@highestwash.com",
      "**Postal address:** Genesis Holdings Inc., United States",
    ],
  },
];

function renderLine(line: string) {
  const parts = line.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Blobs />

      <header className="sticky top-2 sm:top-4 z-50 mx-auto mt-2 sm:mt-4 w-full max-w-[1200px] px-4">
        <div className="flex items-center justify-between rounded-2xl glass-strong px-5 py-3">
          <Link to="/"><Logo /></Link>
          <Link
            to="/"
            className="rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-105"
          >
            ← Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[800px] px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-2 text-sm font-medium text-primary uppercase tracking-widest">Legal</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: <time dateTime="2026-05-08">May 8, 2026</time>
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            HighestWash ("we", "us", or "our") is operated by Genesis Holdings Inc., USA.
            This Privacy Policy explains how we collect, use, share, and protect information
            about you when you use our platform, including the Customer, Merchant, and Rider
            applications and this website.
          </p>
        </motion.div>

        <div className="mt-10 space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((line, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{renderLine(line)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="mx-auto w-full max-w-[800px] px-4 sm:px-6 pb-10">
        <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 text-sm text-muted-foreground sm:flex-row">
          <Logo />
          <p>© {new Date().getFullYear()} Genesis Holdings Inc., USA</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="text-primary font-medium">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <a href="mailto:support@highestwash.com" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
