import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Layers, ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { projectsData, projectCategories, ProjectCategoryFilter, ProjectItem } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectModal } from '../components/projects/ProjectModal';
import { profileData } from '../data/profile';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategoryFilter>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedFilter === 'ALL'
      ? projectsData
      : projectsData.filter((p) => p.filterCategories.includes(selectedFilter));

  return (
    <section id="projects" className="py-24 relative bg-dark-950/80 bg-neural-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Practical machine learning models, deep learning medical image segmentation, interactive Streamlit apps, and computer vision classification pipelines.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {projectCategories.map((category) => {
            const isSelected = selectedFilter === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 shadow-glow-cyan scale-105'
                    : 'bg-dark-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-cyan-500/30'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onViewDetails={(proj) => setActiveModalProject(proj)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More Projects From GitHub Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-white/10 shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                <FolderGit2 className="w-4 h-4" />
                <span>MORE PROJECTS ON GITHUB</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                View All GitHub Projects
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Explore all open-source repositories, exploratory Jupyter notebooks, data analysis pipelines, and machine learning experiments on my public GitHub profile.
              </p>
            </div>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 hover:brightness-110 shadow-glow-cyan transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <SiGithub className="w-4 h-4" />
              <span>View All GitHub Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
