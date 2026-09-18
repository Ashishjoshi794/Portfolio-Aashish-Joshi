import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Code2,
  BarChart3,
  BrainCircuit,
  Layers,
  FileText,
  Eye,
  Clock,
  Bot,
  FolderGit2,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { journeySteps, JourneyStep } from '../data/journey';
import { TiltCard } from '../components/common/TiltCard';

const stepIconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-blue-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-violet-400" />,
  Layers: <Layers className="w-5 h-5 text-purple-400" />,
  FileText: <FileText className="w-5 h-5 text-sky-400" />,
  Eye: <Eye className="w-5 h-5 text-teal-400" />,
  Clock: <Clock className="w-5 h-5 text-amber-400" />,
  Bot: <Bot className="w-5 h-5 text-emerald-400" />,
  FolderGit2: <FolderGit2 className="w-5 h-5 text-cyan-300" />,
  Award: <Award className="w-5 h-5 text-yellow-400" />
};

export const Journey: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(10);

  return (
    <section id="journey" className="py-24 relative bg-dark-950 bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Brain className="w-3.5 h-3.5" />
            <span>PROGRESSIVE TECHNICAL GROWTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
            My Data Science <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            From algorithmic Python syntax to deep learning medical image segmentation — explore the step-by-step evolution of my skills.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Step Navigation Track (Horizontal Scrollable on Mobile) */}
        <div className="mb-14 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-start lg:justify-center min-w-max gap-3 px-4">
            {journeySteps.map((stepItem, idx) => {
              const isActive = activeStep === stepItem.step;
              return (
                <React.Fragment key={stepItem.step}>
                  <button
                    onClick={() => setActiveStep(stepItem.step)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-500 text-dark-950 shadow-glow-cyan scale-105'
                        : 'bg-dark-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-cyan-500/30'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-dark-950/20 flex items-center justify-center text-[10px]">
                      {stepItem.step}
                    </span>
                    <span>{stepItem.title.split(' ')[0]}</span>
                  </button>

                  {idx < journeySteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Detailed Active Step Focus Card */}
        {(() => {
          const current = journeySteps.find((s) => s.step === activeStep) || journeySteps[journeySteps.length - 1];
          return (
            <motion.div
              key={current.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <TiltCard maxTilt={4} scale={1.01}>
                <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-dark-950 border border-cyan-500/40 shadow-glow-cyan flex items-center justify-center shrink-0">
                        {stepIconMap[current.iconName] || <Sparkles className="w-7 h-7 text-cyan-400" />}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase">
                          Milestone {current.step} of 10 • {current.tagline}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {current.status === 'current' ? 'Current Capstone' : 'Mastered'}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-slate-300 mt-6 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="pt-6 mt-6 border-t border-white/5">
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                      Mastered Capabilities & Implementations:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {current.keySkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-dark-950 text-cyan-300 border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })()}

        {/* Complete 10-Step Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {journeySteps.map((step) => {
            const isCurrentActive = activeStep === step.step;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 text-left flex flex-col justify-between ${
                  isCurrentActive
                    ? 'bg-dark-900 border-2 border-cyan-400 shadow-glow-cyan transform -translate-y-1'
                    : 'bg-dark-900/60 border border-white/5 hover:border-white/20 hover:bg-dark-850'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-7 h-7 rounded-xl bg-dark-950 font-mono text-xs font-bold text-cyan-400 flex items-center justify-center border border-white/10">
                      {step.step}
                    </span>
                    {stepIconMap[step.iconName]}
                  </div>
                  <h4 className="text-sm font-display font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {step.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-400/80">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
