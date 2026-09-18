import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { Counter } from '../components/common/Counter';
import { TiltCard } from '../components/common/TiltCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-dark-950/70 bg-neural-dots overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/2 -left-48 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Compass className="w-3.5 h-3.5" />
            <span>DISCOVER MY BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Photo Presentation & Academic Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <TiltCard maxTilt={6} className="relative">
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/15 to-white/5 border border-white/10 backdrop-blur-xl shadow-glass">
                {/* Photo container */}
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-dark-900 shadow-inner">
                  <img
                    src={profileData.profilePhoto}
                    alt="Ashish Raj Joshi portrait"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Overlay Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-dark-900/85 backdrop-blur-md border border-white/10 text-left">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold mb-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{profileData.educationBrief.institution}</span>
                    </div>
                    <p className="text-sm font-bold text-white">
                      Bachelor Student • {profileData.educationBrief.current}
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Professional Narrative & Core Domains */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              {profileData.aboutDescription.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Academic Journey Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-dark-900/80 border border-cyan-500/20">
                <div className="text-xs font-mono text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Bachelor's Degree (8th Sem)
                </div>
                <div className="text-sm font-bold text-white">KFA Business School</div>
                <div className="text-xs text-slate-400 mt-0.5">Computer Science &amp; Data Science</div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-900/80 border border-violet-500/20">
                <div className="text-xs font-mono text-violet-400 font-semibold mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> +2 Higher Secondary
                </div>
                <div className="text-sm font-bold text-white">Golden Gate International College</div>
                <div className="text-xs text-slate-400 mt-0.5">Science / Physics &amp; Mathematics</div>
              </div>
            </div>

            {/* Practical Learning & Project Areas */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Learning &amp; Project Areas:</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'Data Analysis',
                  'Machine Learning',
                  'Deep Learning',
                  'NLP',
                  'Computer Vision',
                  'Time Series',
                  'Web Scraping',
                  'Generative AI'
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-dark-900/80 border border-white/10 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Truthful Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {profileData.statistics.map((stat) => (
                <div
                  key={stat.id}
                  className="p-4 rounded-2xl bg-dark-900/60 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group text-left"
                >
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
