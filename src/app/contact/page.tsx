"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2,
  Send,
  HelpCircle,
  ArrowLeft,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("general");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSending(true);
    // Simulate brief network submission
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <main className="skinfetch-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-emerald-400 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Header */}
        <header className="mb-10 text-center max-w-2xl mx-auto">
          <div className="eyebrow mb-2">
            <Mail size={16} /> Get In Touch &bull; skingrabber.bond
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-3">
            Contact Support &amp; Feedback
          </h1>
          <p className="text-neutral-300 text-sm">
            Have a suggestion, copyright inquiry, partnership idea, or technical question? Reach out to the Skin Grabber team directly.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Direct Contact Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Mail size={20} />
              </div>
              <h3 className="font-bold text-white mb-1">Direct Email</h3>
              <p className="text-xs text-neutral-400 mb-3">
                For partnerships, advertising, or copyright questions:
              </p>
              <div className="space-y-1 text-xs font-mono">
                <a
                  href="mailto:support@skingrabber.bond"
                  className="block text-emerald-400 hover:underline"
                >
                  support@skingrabber.bond
                </a>
                <a
                  href="mailto:tahazaman78@gmail.com"
                  className="block text-neutral-300 hover:text-white"
                >
                  tahazaman78@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Clock size={20} />
              </div>
              <h3 className="font-bold text-white mb-1">Response Time</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We typically review and respond to inquiries within <strong>24 business hours</strong>.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <HelpCircle size={20} />
              </div>
              <h3 className="font-bold text-white mb-1">Helpful Guides</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                Before submitting, you might find answers in our detailed tutorials:
              </p>
              <Link
                href="/guides"
                className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-medium"
              >
                Browse Minecraft Skin Guides &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="md:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-neutral-300 text-xs max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting Skin Grabber. We have received your note and our team will get back to you shortly at <strong>{email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage("");
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="text-emerald-400" size={18} />
                    <h2 className="font-display font-bold text-lg text-white">Send Us a Message</h2>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Topic / Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#14171d] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors cursor-pointer"
                    >
                      <option value="general">General Feedback / Feature Request</option>
                      <option value="bug">Skin Fetching Issue / Bug Report</option>
                      <option value="copyright">Artist / DMCA / Copyright Inquiry</option>
                      <option value="advertising">Advertising &amp; Sponsorship</option>
                      <option value="privacy">Privacy &amp; Data Questions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help? Please provide details or the Minecraft username in question..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-lg cursor-pointer disabled:opacity-50"
                  >
                    {sending ? (
                      "Sending message..."
                    ) : (
                      <>
                        <Send size={16} /> Submit Inquiries
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-400 text-center leading-normal pt-1">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy" className="text-emerald-400 underline">
                      Privacy Policy
                    </Link>
                    . We will never share or sell your email address.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
