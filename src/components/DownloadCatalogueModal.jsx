import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { trackEvent } from "../lib/tracking";
import FormField from "./FormField";
import { companyInfo } from "../data/products";
import { DURATION, EASE } from "../lib/motion";

export default function DownloadCatalogueModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", contact: "", comments: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });
  const [botField, setBotField] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.contact.trim()) {
      setStatus({ loading: false, success: false, error: "Please complete all required fields." });
      return;
    }
    if (!isValidEmail(form.email)) {
      setStatus({ loading: false, success: false, error: "Please enter a valid email address." });
      return;
    }
    if (botField) {
      return;
    }

    setStatus({ loading: true, success: false, error: "" });
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

    if (!endpoint) {
      window.location.href = `mailto:${companyInfo.emails[0]}?subject=${encodeURIComponent(`Catalogue Request from ${form.name}`)}&body=${encodeURIComponent(`Name: ${form.name}\nContact: ${form.contact}\nComments: ${form.comments}`)}`;
      setStatus({ loading: false, success: true, error: "" });
      trackEvent("form_submit", { source: "catalogue_modal" });
      
      // Auto-close after success
      setTimeout(() => {
        onClose();
        setStatus({ loading: false, success: false, error: "" });
        setForm({ name: "", email: "", contact: "", comments: "" });
      }, 2000);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _subject: `Catalogue Request from ${form.name}`, _redirect: window.location.href }),
      });
      if (!response.ok) throw new Error("Failed to submit form.");
      setStatus({ loading: false, success: true, error: "" });
      trackEvent("form_submit", { source: "catalogue_modal" });
      
      setTimeout(() => {
        onClose();
        setStatus({ loading: false, success: false, error: "" });
        setForm({ name: "", email: "", contact: "", comments: "" });
      }, 2000);
    } catch (error) {
      setStatus({ loading: false, success: false, error: "Unable to send your request right now. Please try again later." });
    }
  };

  const inputCls = "w-full border border-teal-pale bg-white px-4 py-3 text-sm text-deep outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 rounded-md";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: DURATION.fast, ease: EASE.enter }}
            className="w-full max-w-lg bg-paper shadow-elevated border border-teal-pale overflow-hidden rounded-md"
          >
            <div className="flex items-center justify-between border-b border-teal-pale px-6 py-5 bg-white">
              <div>
                <h2 className="font-display text-xl text-deep uppercase tracking-wider font-bold">Download Catalogue</h2>
                <p className="text-sm text-steel-dark mt-1">To download our corporate brochure please fill below details.</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-deep hover:text-teal transition-colors w-11 h-11 flex items-center justify-center"
              >
                <X size={22} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-paper">
              {/* Honeypot */}
              <input
                type="text"
                name="fullname"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              
              <FormField label="Full Name" required>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder="Your Name"
                />
              </FormField>
              
              <FormField label="Email Address" required>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder="you@company.com"
                />
              </FormField>
              
              <FormField label="Contact No." required>
                <input
                  type="tel"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder="+91 98765 43210"
                />
              </FormField>
              
              <FormField label="Comments">
                <textarea
                  name="comments"
                  value={form.comments}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputCls} resize-none`}
                  placeholder="Any specific requirements?"
                />
              </FormField>
              
              {status.error && <div className="text-sm text-[var(--color-amber)]">{status.error}</div>}
              {status.success && <div className="text-sm text-teal">Request sent successfully! Closing...</div>}
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full flex items-center justify-center gap-2 bg-teal px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-teal-light disabled:cursor-not-allowed disabled:opacity-60 rounded-md"
                >
                  {status.loading ? "Submitting..." : "Submit"}
                  <Download size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
