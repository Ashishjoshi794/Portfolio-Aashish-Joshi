import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-dark-950/80 bg-neural-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
            Education <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Formal degrees, specialized technical studies, and educational milestones.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Animated Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent shadow-[0_0_10px_#00f2fe]" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-dark-950 border-2 border-cyan-400 shadow-glow-cyan flex items-center justify-center z-10">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="p-6 sm:p-7 rounded-3xl bg-dark-900/80 border border-white/10 hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 group text-left">
                      
                      {/* Top Meta Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {item.degree}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Institution Name */}
                      <h3 className="text-xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {item.institution}
                      </h3>

                      {/* Current Status Pill */}
                      {item.currentTerm && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mt-2">
                          <Sparkles className="w-3 h-3 animate-spin-slow" />
                          <span>Currently Studying • {item.currentTerm}</span>
                        </div>
                      )}

                      {/* Field / Location */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-3">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{item.location} • {item.field}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-4 mt-4 border-t border-white/5">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
