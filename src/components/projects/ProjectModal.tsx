import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, Database, CheckCircle2, Layers, Award, AlertCircle, Settings, BarChart3, Rocket, Wrench } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { ProjectItem } from '../../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const detailSections = [
    { icon: AlertCircle, label: 'Problem', content: project.details.problem, color: 'text-red-400' },
    { icon: Database, label: 'Dataset', content: project.details.dataset, color: 'text-cyan-400' },
    { icon: Settings, label: 'Preprocessing', content: project.details.preprocessing, color: 'text-amber-400' },
    { icon: Cpu, label: 'Model', content: project.details.model, color: 'text-violet-400' },
    { icon: BarChart3, label: 'Evaluation', content: project.details.evaluation, color: 'text-emerald-400' },
    { icon: Rocket, label: 'Deployment', content: project.details.deployment, color: 'text-blue-400' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-dark-950/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-3xl bg-dark-900 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Preview Image */}
        <div className="relative aspect-[16/9] w-full bg-dark-950 overflow-hidden border-b border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-dark-950/80 border border-white/20 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-200"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Badge on Image */}
          <div className="absolute bottom-4 left-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
          {/* Title & Subtitle */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Verified Metrics Grid if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Key Parameters</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className={`p-3 rounded-xl border text-center ${
                      metric.highlight
                        ? 'bg-cyan-500/10 border-cyan-500/40 shadow-glow-cyan'
                        : 'bg-dark-950/80 border-white/10'
                    }`}
                  >
                    <div className="text-xs text-slate-400 font-medium">{metric.label}</div>
                    <div className="text-sm sm:text-base font-display font-extrabold text-white mt-0.5">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Structured Detail Sections: Problem, Dataset, Preprocessing, Model, Evaluation, Deployment */}
          <div className="space-y-4">
            {detailSections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.label} className="p-4 rounded-2xl bg-dark-950/60 border border-white/5">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5 mb-2">
                    <Icon className={`w-4 h-4 ${section.color}`} />
                    <span>{section.label}</span>
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* What I Did Section */}
          {project.details.whatIDid && project.details.whatIDid.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-orange-400" />
                <span>What I Did</span>
              </h3>
              <ul className="space-y-2">
                {project.details.whatIDid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Technical Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Key Technical Features</span>
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* End-to-End Pipeline Steps */}
          {project.workflowSteps && project.workflowSteps.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                End-to-End Pipeline Steps
              </h3>
              <div className="space-y-1.5">
                {project.workflowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-dark-950/40 border border-white/5 text-xs text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-white/10 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-dark-950/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
          >
            Close Window
          </button>

          <div className="flex items-center gap-3">
            {/* Live Demo button ONLY if real working link */}
            {project.demo && project.demo.trim() !== '' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/40 hover:bg-violet-600/30 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 hover:brightness-110 shadow-glow-cyan transition-all"
            >
              <SiGithub className="w-3.5 h-3.5" />
              <span>View On GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
