import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { Blobs } from "@/components/layout/Blobs";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — HighestWash" },
      { name: "description", content: "Read the Terms of Service governing your use of the HighestWash platform." },
      { name: "robots", content: "index, follow" },
    ],
  }),
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the HighestWash platform — including the website, Customer App, Merchant App, and Rider App — you agree to be bound by these Terms of Service and our Privacy Policy.",
      "If you do not agree to these Terms, do not access or use the platform.",
      "We may update these Terms at any time. Continued use after changes constitutes acceptance. We will provide at least 14 days' notice of material changes.",
    ],
  },
  {
    title: "2. Who We Are",
    content: [
      "HighestWash is an on-demand laundry marketplace operated by Genesis Holdings Inc., a company incorporated in the United States.",
      "We connect customers who need laundry services with independent local merchants who provide those services, and independent riders who collect and deliver orders.",
      "HighestWash is a technology platform, not a laundry service provider. Merchants and riders are independent contractors, not employees of Genesis Holdings Inc.",
    ],
  },
  {
    title: "3. Eligibility",
    content: [
      "You must be at least 18 years old to create an account and use HighestWash.",
      "By using the platform, you represent that all information you provide is accurate, current, and complete.",
      "We reserve the right to suspend or terminate accounts that provide false information or violate these Terms.",
    ],
  },
  {
    title: "4. The Bidding System",
    content: [
      "Customers post laundry jobs with photos and service requirements. Up to 4 verified local merchants may submit competitive bids.",
      "Accepting a bid creates a binding service agreement between the customer and that merchant. HighestWash facilitates but is not a party to that agreement.",
      "Once a bid is accepted and a rider is assigned, cancellations may incur fees as described in our Cancellation Policy.",
      "Bid prices are set entirely by merchants. HighestWash does not fix, recommend, or guarantee pricing.",
    ],
  },
  {
    title: "5. Payments",
    content: [
      "All payments are processed through our third-party payment provider. By providing payment information, you authorise us to charge the agreed bid amount plus any applicable service fees.",
      "Service fees are disclosed before you confirm an order and are non-refundable except as stated in our Refund Policy.",
      "Merchants receive payouts after successful order completion, minus HighestWash's platform commission.",
      "Riders receive earnings per completed delivery as shown in their Rider App earnings dashboard.",
    ],
  },
  {
    title: "6. User Responsibilities",
    content: [
      "**All users:** Provide accurate information; treat other users with respect; do not use the platform for illegal activities; do not attempt to circumvent the platform for off-platform transactions.",
      "**Customers:** Ensure laundry items are safe and legal to handle; be available for rider collection within the agreed window.",
      "**Merchants:** Honour accepted bids; handle items with care; maintain valid business licences and insurance as required by local law.",
      "**Riders:** Maintain a valid driving licence and vehicle insurance; handle items carefully; follow the route and delivery instructions.",
    ],
  },
  {
    title: "7. Prohibited Conduct",
    content: [
      "Submitting false reviews or ratings.",
      "Attempting to contact other users outside the platform to avoid HighestWash fees.",
      "Uploading content that is harmful, threatening, obscene, or infringes third-party rights.",
      "Reverse-engineering, scraping, or interfering with the platform's technical infrastructure.",
      "Impersonating another person or entity.",
    ],
  },
  {
    title: "8. Intellectual Property",
    content: [
      "All platform content — including the HighestWash name, owl logo, software, and design — is owned by or licensed to Genesis Holdings Inc. and protected by copyright, trademark, and other laws.",
      "You may not reproduce, distribute, or create derivative works from our content without written permission.",
      "By posting content on the platform (e.g. photos, reviews), you grant us a non-exclusive, royalty-free licence to use that content for operating and promoting the service.",
    ],
  },
  {
    title: "9. Disclaimers & Limitation of Liability",
    content: [
      "The platform is provided \"as is\" and \"as available\". We make no warranty that the service will be uninterrupted, error-free, or meet your specific requirements.",
      "HighestWash is not responsible for the quality of laundry services performed by merchants, or for damage to items during collection or delivery beyond what is covered by our claims process.",
      "To the maximum extent permitted by law, Genesis Holdings Inc.'s aggregate liability to you for any claim arising from your use of the platform shall not exceed the total fees you paid in the 3 months prior to the claim.",
    ],
  },
  {
    title: "10. Dispute Resolution",
    content: [
      "We encourage you to contact our support team first at support@highestwash.com for any disputes.",
      "If a dispute cannot be resolved informally within 30 days, it shall be submitted to binding arbitration under the rules of the American Arbitration Association, conducted in English in the State of Delaware.",
      "Nothing in this clause prevents either party from seeking injunctive or other equitable relief in a court of competent jurisdiction.",
      "You agree to resolve disputes individually and waive any right to class-action proceedings.",
    ],
  },
  {
    title: "11. Termination",
    content: [
      "You may close your account at any time by contacting support@highestwash.com.",
      "We may suspend or terminate your access immediately if you violate these Terms, engage in fraudulent activity, or pose a safety risk to other users.",
      "Upon termination, your right to use the platform ceases. Sections on intellectual property, disclaimer, limitation of liability, and dispute resolution survive termination.",
    ],
  },
  {
    title: "12. Governing Law",
    content: [
      "These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of law principles.",
    ],
  },
  {
    title: "13. Contact",
    content: [
      "**Legal & Terms enquiries:** legal@highestwash.com",
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

function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: <time dateTime="2026-05-08">May 8, 2026</time>
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Please read these Terms of Service carefully before using the HighestWash platform
            operated by Genesis Holdings Inc. These Terms govern your access to and use of our
            website, mobile applications, and all related services.
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
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="text-primary font-medium">Terms</Link>
            <a href="mailto:support@highestwash.com" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
