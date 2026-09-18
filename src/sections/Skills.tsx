import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { skillCategories, SkillItem } from '../data/skills';
import { TiltCard } from '../components/common/TiltCard';
import { TechIcon } from '../components/common/TechIcon';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-dark-950 bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Hands-on technical stack spanning machine learning algorithms, deep learning neural architectures, exploratory analysis, and data engineering.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 shadow-glow-cyan'
                : 'bg-dark-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan'
                  : 'bg-dark-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.shortTitle}
            </button>
          ))}
        </div>

        {/* Skills Display by Category */}
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                {/* Group Heading & Subtext */}
                <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
                      <span>{cat.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {cat.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400/80 shrink-0">
                    {cat.skills.length} competencies
                  </span>
                </div>

                {/* Skills Grid for this Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                  {cat.skills.map((skill: SkillItem) => (
                    <TiltCard
                      key={skill.name}
                      maxTilt={7}
                      scale={1.02}
                      className="h-full"
                    >
                      <div className="h-full p-5 rounded-2xl bg-dark-900/70 border border-white/5 hover:border-cyan-500/40 hover:bg-dark-850 hover:shadow-glow-cyan transition-all duration-300 group flex flex-col justify-between">
                        
                        <div>
                          {/* Top row: Icon & Tag */}
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <div className="p-2.5 rounded-xl bg-dark-950 border border-white/10 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                              <TechIcon name={skill.iconName} className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                              {skill.category}
                            </span>
                          </div>

                          {/* Technology Name */}
                          <h4 className="text-base font-display font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>

                          {/* Technology Description */}
                          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>

                        {/* Technology Tag Pills (Chips instead of percentages) */}
                        <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-white/5">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-0.5 rounded bg-dark-950/80 text-cyan-300/80 border border-cyan-500/20 font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                      </div>
                    </TiltCard>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
