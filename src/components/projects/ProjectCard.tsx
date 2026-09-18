import React from 'react';
import { ArrowUpRight, Award, Cpu, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { ProjectItem } from '../../data/projects';
import { TiltCard } from '../common/TiltCard';
import { Counter } from '../common/Counter';

interface ProjectCardProps {
  project: ProjectItem;
  onViewDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <TiltCard maxTilt={5} scale={1.01} className="h-full">
      <div className="h-full flex flex-col justify-between rounded-3xl bg-dark-900/80 border border-white/10 hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 overflow-hidden group">
        
        <div>
          {/* Card Top: Preview Image with Overlay */}
          <div className="relative aspect-[16/10] w-full bg-dark-950 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent pointer-events-none" />

            {/* Category Pill on Image */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-dark-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                {project.category.split('/')[0].trim()}
              </span>
            </div>

            {/* Featured Badge if Capstone */}
            {project.featured && project.id === 'brain-tumor-segmentation' && (
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 backdrop-blur-md shadow-glow-cyan">
                <Award className="w-3.5 h-3.5 text-cyan-300" />
                <span>FINAL YEAR CAPSTONE</span>
              </div>
            )}
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-4 text-left">
            {/* Title & Subtitle */}
            <div>
              <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-xs font-mono text-cyan-400/80 mt-1">
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* Short Description */}
            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
              {project.shortDescription}
            </p>

            {/* Real Metrics for Brain Tumor Capstone if available */}
            {project.id === 'brain-tumor-segmentation' && project.metrics && (
              <div className="p-3.5 rounded-2xl bg-dark-950/80 border border-cyan-500/30 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="flex items-center gap-1 text-cyan-300 font-semibold">
                    <Cpu className="w-3.5 h-3.5" /> Model: VGG16 + U-Net
                  </span>
                  <span className="text-emerald-400 font-bold">Verified Test Metrics</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-white/5">
                  <div className="p-1.5 rounded-lg bg-white/5">
                    <div className="text-[10px] text-slate-400 font-mono">Dice Score</div>
                    <div className="text-sm font-display font-extrabold text-cyan-300">
                      <Counter end={0.9124} decimals={4} />
                    </div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5">
                    <div className="text-[10px] text-slate-400 font-mono">IoU Score</div>
                    <div className="text-sm font-display font-extrabold text-cyan-300">
                      <Counter end={0.8856} decimals={4} />
                    </div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5">
                    <div className="text-[10px] text-slate-400 font-mono">Accuracy</div>
                    <div className="text-sm font-display font-extrabold text-emerald-300">
                      <Counter end={0.9980} decimals={4} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2.5 py-0.5 rounded-md bg-dark-950 text-slate-300 border border-white/5 font-mono"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 5 && (
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-dark-950 text-slate-400 font-mono">
                  +{project.tech.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-4">
          <button
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {/* Live Demo button ONLY shown if project.demo actually exists and is not empty */}
            {project.demo && project.demo.trim() !== '' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-dark-950 border border-white/10 text-slate-300 hover:text-white hover:border-violet-400 transition-colors"
                aria-label={`Live Demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-dark-950 border border-white/10 text-slate-200 hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-glow-cyan transition-all"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <SiGithub className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </TiltCard>
  );
};
