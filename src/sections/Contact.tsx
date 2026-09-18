import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, Check, Copy, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { profileData } from '../data/profile';
import { TiltCard } from '../components/common/TiltCard';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Build mailto URI for direct dispatch
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Ashish,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-950 bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
            Let's Build <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">Something Intelligent</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Have a project, opportunity, or idea? Let's connect.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Buttons */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-3xl bg-dark-900/80 border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  Direct Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Reach out directly via email, phone, or professional networks.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 flex items-center justify-between gap-3 group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-cyan-400 truncate block transition-colors"
                    >
                      {profileData.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.contact.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 flex items-center justify-between gap-3 group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400">Phone / WhatsApp</div>
                    <a
                      href={`tel:${profileData.contact.phone}`}
                      className="text-sm font-semibold text-slate-200 hover:text-cyan-400 truncate block transition-colors"
                    >
                      {profileData.contact.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.contact.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* 4 Direct Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-cyan-500 text-dark-950 hover:brightness-110 shadow-glow-cyan transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>SEND EMAIL</span>
                </a>

                <a
                  href={`tel:${profileData.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-dark-950 border border-white/15 text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL ME</span>
                </a>

                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-dark-950 border border-white/15 text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-dark-950 border border-white/15 text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Validated Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={3} scale={1.01}>
              <div className="p-8 sm:p-10 rounded-3xl bg-dark-900/90 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 text-left">
                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill in your details below. Clicking send will open your email client pre-filled with your message. (Messages are not stored on a remote server).
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
                    <Check className="w-5 h-5 shrink-0" />
                    <span>Your email client has been opened! If it did not launch automatically, you can email directly at {profileData.contact.email}.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                      YOUR NAME
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950 border ${
                        errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-cyan-400'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                      YOUR EMAIL
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950 border ${
                        errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-cyan-400'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Share project goals, internships, or data science inquiries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950 border ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-cyan-400'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-dark-950 hover:brightness-110 shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>LAUNCH EMAIL MESSAGE</span>
                  </button>
                </form>

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
