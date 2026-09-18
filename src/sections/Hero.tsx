import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Send, Sparkles, Mail, Phone, Cpu, Brain, Database, Eye, Download } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { profileData } from '../data/profile';
import { HeroScene } from '../components/3d/HeroScene';
import { openResumeModal } from '../components/resume/ResumeModal';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-950 bg-cyber-grid"
    >
      {/* 3D Three.js Neural Network Interactive Canvas */}
      <HeroScene />

      {/* Futuristic Background Radial Gradient Auras */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Small Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="tracking-wide">{profileData.badge}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                  {profileData.displayName}
                </span>
              </h1>

              {/* Professional Title Subtitle */}
              <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold text-slate-300">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 animate-pulse" />
                <span className="bg-gradient-to-r from-slate-100 via-cyan-100 to-slate-300 bg-clip-text text-transparent">
                  {profileData.subtitle}
                </span>
              </div>
            </div>

            {/* Description strictly verbatim from user prompt */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              {profileData.heroDescription}
            </p>

            {/* Action Buttons: View Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-dark-950 hover:brightness-110 shadow-glow-cyan transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <div className="inline-flex items-center rounded-xl bg-dark-900/80 backdrop-blur-md border border-cyan-500/30 overflow-hidden shadow-glow-cyan/5 transition-all duration-300 hover:border-cyan-400 hover:scale-105 active:scale-95">
                <button
                  type="button"
                  onClick={openResumeModal}
                  className="inline-flex items-center gap-2 px-4 py-3.5 font-semibold text-sm text-cyan-300 hover:bg-cyan-500/10 transition-colors cursor-pointer"
                  title="View full resume preview"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View Resume</span>
                </button>
                <span className="w-px h-6 bg-cyan-500/20" />
                <a
                  href={profileData.resumeUrl}
                  download="Ashish_Joshi_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-3.5 font-semibold text-sm text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                  title="Download Resume PDF directly"
                  aria-label="Download Resume PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/5 backdrop-blur-md border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Send className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Buttons & Contact Channels */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-widest text-slate-300 font-mono">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300"
                  aria-label="Ashish Joshi GitHub Profile"
                >
                  <SiGithub className="w-5 h-5" />
                </a>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-[#0a66c2] hover:brightness-125 hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300"
                  aria-label="Ashish Joshi LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="p-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-cyan-400 hover:brightness-125 hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300"
                  aria-label="Send email to Ashish Joshi"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${profileData.contact.phone}`}
                  className="p-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-emerald-400 hover:brightness-125 hover:border-emerald-500/40 hover:shadow-glow-cyan transition-all duration-300"
                  aria-label="Call Ashish Joshi"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-300 border-l border-white/10 pl-6">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Cpu className="w-3.5 h-3.5" /> PyTorch
                </span>
                <span className="flex items-center gap-1.5 text-violet-300">
                  <Brain className="w-3.5 h-3.5" /> Deep Learning
                </span>
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <Database className="w-3.5 h-3.5" /> KFA 8th Sem
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo with 3D Rotating Ring & Floating Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer 3D Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin-slow pointer-events-none" />
              
              {/* Counter-rotating Secondary Orbital Ring */}
              <div
                className="absolute inset-2 rounded-full border border-violet-500/40 pointer-events-none"
                style={{ animation: 'spin 26s linear infinite reverse' }}
              />

              {/* Glowing Pulse Aura */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-emerald-500/10 blur-2xl animate-pulse-glow pointer-events-none" />

              {/* Floating Frame Container */}
              <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full p-2.5 bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-transparent border border-white/20 backdrop-blur-xl shadow-glass shadow-cyan-500/20 animate-float">
                
                {/* Photo container preserving natural face without distortion */}
                <div className="w-full h-full rounded-full overflow-hidden relative bg-dark-900 shadow-inner group">
                  <img
                    src={profileData.profilePhoto}
                    alt="Ashish Raj Joshi - Data Scientist"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-white/10 pointer-events-none" />
                </div>

                {/* Floating Badge 1: 8th Sem KFA */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-2 sm:-left-4 px-3.5 py-1.5 rounded-xl bg-dark-900/90 backdrop-blur-md border border-cyan-500/40 text-xs font-semibold text-cyan-300 shadow-glow-cyan flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>KFA 8th Semester</span>
                </div>

                {/* Floating Badge 2: AI & ML */}
                <div className="absolute -top-2 -right-2 sm:top-2 sm:-right-4 px-3.5 py-1.5 rounded-xl bg-dark-900/90 backdrop-blur-md border border-violet-500/40 text-xs font-semibold text-violet-300 shadow-glow-violet flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  <span>AI &amp; Data Science</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
