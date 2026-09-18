import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, FolderGit2, Star, GitFork, ArrowUpRight, Code2, Sparkles, BookOpen } from 'lucide-react';
import { profileData } from '../data/profile';
import { TiltCard } from '../components/common/TiltCard';

interface RepoMeta {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  tag: string;
}

const featuredRepos: RepoMeta[] = [
  {
    name: "final-year-project-Brain-Tumor-Segmentation",
    description: "Brain Tumor Segmentation from MRI Images Using Deep Learning (VGG16 + U-Net).",
    language: "Python",
    stars: 1,
    forks: 0,
    url: "https://github.com/Ashishjoshi794/final-year-project-Brain-Tumor-Segmentation",
    tag: "Deep Learning / Medical"
  },
  {
    name: "Employee-Attrition-Prediction",
    description: "Machine Learning project predicting employee attrition with Streamlit prediction dashboard.",
    language: "Jupyter / Python",
    stars: 1,
    forks: 0,
    url: "https://github.com/Ashishjoshi794/Employee-Attrition-Prediction",
    tag: "ML / Streamlit"
  },
  {
    name: "House_Price_Prediction",
    description: "Residential selling price regression modeling with Extra Trees Regressor & Streamlit app.",
    language: "Jupyter / Python",
    stars: 1,
    forks: 0,
    url: "https://github.com/Ashishjoshi794/House_Price_Prediction",
    tag: "Regression"
  },
  {
    name: "Dog-and-Cat-Classification",
    description: "MobileNetV2 transfer learning with confidence thresholding (< 70%) & multi-page Streamlit app.",
    language: "Jupyter / Python",
    stars: 1,
    forks: 0,
    url: "https://github.com/Ashishjoshi794/Dog-and-Cat-Classification",
    tag: "Computer Vision"
  },
  {
    name: "bots",
    description: "Multi-modal AI bot suite integrating Groq LLM API directly for Chat, PDF QA, Speech, and Vision.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/Ashishjoshi794/bots",
    tag: "Generative AI"
  },
  {
    name: "alpha_project (TASK 3)",
    description: "Car Price Prediction regression workflow on automotive features (car data.csv).",
    language: "Jupyter Notebook",
    stars: 1,
    forks: 0,
    url: "https://github.com/Ashishjoshi794/alpha_project/tree/main/data_science/TASK%203",
    tag: "Data Science"
  },
  {
    name: "Web-scraping-",
    description: "Automated web harvesting suite using BeautifulSoup and Requests for e-commerce and sports.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    url: "https://github.com/Ashishjoshi794/Web-scraping-",
    tag: "Web Scraping"
  },
  {
    name: "computer-vision",
    description: "Hands-on OpenCV image processing: thresholding, bitwise ops, noise filtering, and colorspaces.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    url: "https://github.com/Ashishjoshi794/computer-vision",
    tag: "OpenCV / Vision"
  }
];

export const GitHubSection: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number>(21);

  useEffect(() => {
    // Attempt safe fetch with timeout, keeping 21 as reliable fallback
    const controller = new AbortController();
    fetch('https://api.github.com/users/Ashishjoshi794', { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.public_repos === 'number') {
          setRepoCount(data.public_repos);
        }
      })
      .catch(() => {
        // Safe fallback already set to 21
      });

    return () => controller.abort();
  }, []);

  return (
    <section id="github" className="py-24 relative bg-dark-950 bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>OPEN SOURCE CONTRIBUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
            Explore My <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">GitHub</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Review my public repositories, Jupyter notebooks, data science pipelines, and computer vision experiments on GitHub.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Profile Overview Card */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-dark-900/80 border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-dark-950 border border-cyan-500/40 p-1 shrink-0 overflow-hidden shadow-glow-cyan">
              <img
                src={profileData.profilePhoto}
                alt="Ashish Joshi GitHub Avatar"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-xl font-display font-bold text-white">Ashish Joshi</h3>
                <span className="text-xs font-mono text-cyan-400">@Ashishjoshi794</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Data Science • Machine Learning • Deep Learning • Computer Vision
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center sm:text-right border-l sm:border-l-0 border-white/10 pl-4 sm:pl-0">
              <div className="text-2xl font-display font-extrabold text-cyan-400">{repoCount}</div>
              <div className="text-xs font-mono text-slate-400">Public Repositories</div>
            </div>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 hover:brightness-110 shadow-glow-cyan transition-all duration-300 shrink-0"
            >
              <Github className="w-4 h-4" />
              <span>Visit Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredRepos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="h-full"
            >
              <TiltCard maxTilt={5} scale={1.01} className="h-full">
                <div className="h-full p-5 rounded-2xl bg-dark-900/80 border border-white/10 hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between text-left group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {repo.tag}
                      </span>
                      <BookOpen className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <h4 className="text-sm font-display font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {repo.name}
                    </h4>

                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      {repo.language}
                    </span>

                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/link"
                      aria-label={`View ${repo.name} on GitHub`}
                    >
                      <span>Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Explore All Repositories CTA */}
        <div className="mt-14 text-center">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm bg-dark-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-glow-cyan transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Github className="w-5 h-5" />
            <span>View All {repoCount} Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
