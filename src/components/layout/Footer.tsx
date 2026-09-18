import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 py-12 relative overflow-hidden text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-display font-bold text-sm text-cyan-400">
            AJ
          </div>
          <div>
            <p className="text-slate-300 font-medium">
              © 2026 Ashish Joshi. Built with React, AI &amp; Data Science.
            </p>
            <p className="text-xs text-slate-300 mt-0.5">
              KFA Business School • 8th Semester Capstone
            </p>
          </div>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-dark-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-glow-cyan transition-all"
            aria-label="Ashish Joshi GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-dark-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-glow-cyan transition-all"
            aria-label="Ashish Joshi LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.contact.email}`}
            className="p-2.5 rounded-xl bg-dark-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-glow-cyan transition-all"
            aria-label="Send email to Ashish Joshi"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-semibold group"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
        </button>

      </div>
    </footer>
  );
};
