import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Mail, MessageSquare, User } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Blobs } from "@/components/layout/Blobs";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — HighestWash" },
      {
        name: "description",
        content:
          "Get in touch with the HighestWash team. We're here to help with questions about our on-demand laundry platform.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
});

type FormState = "idle" | "sending" | "success" | "error";

const topics = [
  "General enquiry",
  "Customer support",
  "Merchant partnership",
  "Rider onboarding",
  "Technical issue",
  "Press & media",
  "Other",
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.topic) e.topic = "Please select a topic.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setState("sending");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/service@highestwash.online`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `[HighestWash] ${form.topic}`,
          message: form.message,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", topic: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  function field(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

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

      <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-2 text-sm font-medium text-primary uppercase tracking-widest">Get in touch</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            We'd love to hear from you
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Whether you're a customer, merchant, rider, or press — our team responds to every message at{" "}
            <a href="mailto:service@highestwash.online" className="text-primary hover:underline font-medium">
              service@highestwash.online
            </a>
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-4"
          >
            {[
              {
                icon: Mail,
                title: "Email",
                body: "service@highestwash.online",
                href: "mailto:service@highestwash.online",
              },
              {
                icon: MessageSquare,
                title: "In-app support",
                body: "Use the chat icon inside the Customer, Merchant, or Rider app for real-time help.",
                href: null,
              },
              {
                icon: User,
                title: "Merchant & Rider onboarding",
                body: "Want to list your laundry business or start riding? Tell us in the form and we'll guide you.",
                href: null,
              },
            ].map((card) => (
              <div key={card.title} className="glass rounded-2xl p-5">
                <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <card.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{card.title}</h3>
                {card.href ? (
                  <a href={card.href} className="mt-1 block text-sm text-primary hover:underline">
                    {card.body}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">{card.body}</p>
                )}
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-strong rounded-3xl p-6 sm:p-8"
          >
            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-primary to-accent glow">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Message sent!</h2>
                  <p className="max-w-sm text-muted-foreground">
                    Thanks for reaching out. We'll get back to you at <strong>{form.email || "your email"}</strong> within 1 business day.
                  </p>
                  <button
                    onClick={() => setState("idle")}
                    className="mt-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-105"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Full name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => field("name", e.target.value)}
                        placeholder="Jane Smith"
                        className={`w-full rounded-xl border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:ring-2 focus:ring-primary/40 ${errors.name ? "border-destructive" : "border-input"}`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Email address <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => field("email", e.target.value)}
                        placeholder="jane@example.com"
                        className={`w-full rounded-xl border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:ring-2 focus:ring-primary/40 ${errors.email ? "border-destructive" : "border-input"}`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Topic <span className="text-destructive">*</span>
                    </label>
                    <select
                      value={form.topic}
                      onChange={(e) => field("topic", e.target.value)}
                      className={`w-full rounded-xl border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-primary/40 ${errors.topic ? "border-destructive" : "border-input"} ${!form.topic ? "text-muted-foreground/60" : ""}`}
                    >
                      <option value="" disabled>Select a topic…</option>
                      {topics.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.topic && <p className="mt-1 text-xs text-destructive">{errors.topic}</p>}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={(e) => field("message", e.target.value)}
                      placeholder="Tell us how we can help…"
                      className={`w-full resize-none rounded-xl border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:ring-2 focus:ring-primary/40 ${errors.message ? "border-destructive" : "border-input"}`}
                    />
                    <div className="flex items-center justify-between mt-1">
                      {errors.message
                        ? <p className="text-xs text-destructive">{errors.message}</p>
                        : <span />}
                      <span className="text-xs text-muted-foreground">{form.message.length} chars</span>
                    </div>
                  </div>

                  {state === "error" && (
                    <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      Something went wrong. Please try again or email us directly at service@highestwash.online
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground glow transition hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {state === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    We typically reply within 1 business day. By submitting you agree to our{" "}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 pb-10 mt-10">
        <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 text-sm text-muted-foreground sm:flex-row">
          <Logo />
          <p>© {new Date().getFullYear()} Genesis Holdings Inc., USA</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/contact" className="text-primary font-medium">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
