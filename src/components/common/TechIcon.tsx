import React from 'react';
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiGit,
  SiGithub,
  SiStreamlit,
  SiJupyter
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import {
  Database,
  LineChart,
  BarChart3,
  Brain,
  Cpu,
  Layers,
  Sparkles,
  Eye,
  Globe,
  Bot,
  Search,
  Clock,
  Code2,
  FileText,
  Binary,
  Table,
  Target,
  Share2,
  GitFork,
  Zap,
  Wrench,
  CheckCircle2,
  Filter,
  Repeat,
  ArrowRightLeft
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  color?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5', color }) => {
  const norm = name.toLowerCase().trim();

  // Official brand Simple Icons
  if (norm.includes('python')) return <SiPython className={className} style={{ color: color || '#38bdf8' }} />;
  if (norm.includes('pandas')) return <SiPandas className={className} style={{ color: color || '#a855f7' }} />;
  if (norm.includes('numpy')) return <SiNumpy className={className} style={{ color: color || '#38bdf8' }} />;
  if (norm.includes('scikit') || norm.includes('sklearn')) return <SiScikitlearn className={className} style={{ color: color || '#f59e0b' }} />;
  if (norm.includes('pytorch')) return <SiPytorch className={className} style={{ color: color || '#ef4444' }} />;
  if (norm.includes('tensorflow')) return <SiTensorflow className={className} style={{ color: color || '#f97316' }} />;
  if (norm.includes('opencv')) return <SiOpencv className={className} style={{ color: color || '#10b981' }} />;
  if (norm === 'git') return <SiGit className={className} style={{ color: color || '#f97316' }} />;
  if (norm.includes('github')) return <SiGithub className={className} style={{ color: color || '#f8fafc' }} />;
  if (norm.includes('linkedin')) return <FaLinkedin className={className} style={{ color: color || '#0a66c2' }} />;
  if (norm.includes('tableau')) return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: color || '#e97627' }}>
      <path d="M11.2 2.2h1.6v4.6h-1.6V2.2zm0 15h1.6v4.6h-1.6v-4.6zm-7.6-7.5h4.6v1.6H3.6V9.7zm15.8 0H24v1.6h-4.6V9.7zm-9.3-3.7h1.6v9h-1.6V6zm-4.5 4.5h9v1.6h-9v-1.6z" />
    </svg>
  );
  if (norm.includes('streamlit')) return <SiStreamlit className={className} style={{ color: color || '#ff4b4b' }} />;
  if (norm.includes('jupyter')) return <SiJupyter className={className} style={{ color: color || '#f97316' }} />;

  // Domain & Concept Icons
  if (norm.includes('sql') || norm.includes('database')) return <Database className={className} style={{ color: color || '#10b981' }} />;
  if (norm.includes('matplotlib')) return <LineChart className={className} style={{ color: color || '#38bdf8' }} />;
  if (norm.includes('seaborn')) return <BarChart3 className={className} style={{ color: color || '#818cf8' }} />;
  if (norm.includes('nlp')) return <FileText className={className} style={{ color: color || '#38bdf8' }} />;
  if (norm.includes('vision') || norm.includes('segmentation')) return <Eye className={className} style={{ color: color || '#a855f7' }} />;
  if (norm.includes('u-net') || norm.includes('cnn') || norm.includes('neural')) return <Layers className={className} style={{ color: color || '#38bdf8' }} />;
  if (norm.includes('groq') || norm.includes('bot') || norm.includes('genai') || norm.includes('generative')) return <Bot className={className} style={{ color: color || '#10b981' }} />;
  if (norm.includes('time series')) return <Clock className={className} style={{ color: color || '#f59e0b' }} />;
  if (norm.includes('scraping') || norm.includes('web')) return <Globe className={className} style={{ color: color || '#00f2fe' }} />;
  if (norm.includes('eda') || norm.includes('analysis')) return <Search className={className} style={{ color: color || '#818cf8' }} />;
  if (norm.includes('regression') || norm.includes('trend')) return <LineChart className={className} style={{ color: color || '#10b981' }} />;
  if (norm.includes('classification') || norm.includes('target')) return <Target className={className} style={{ color: color || '#f43f5e' }} />;
  if (norm.includes('cluster')) return <Share2 className={className} style={{ color: color || '#c084fc' }} />;
  if (norm.includes('tree') || norm.includes('forest')) return <GitFork className={className} style={{ color: color || '#10b981' }} />;
  if (norm.includes('xgboost')) return <Zap className={className} style={{ color: color || '#fbbf24' }} />;
  if (norm.includes('feature') || norm.includes('preprocessing')) return <Wrench className={className} style={{ color: color || '#38bdf8' }} />;
  if (norm.includes('evaluation') || norm.includes('metric')) return <CheckCircle2 className={className} style={{ color: color || '#14b8a6' }} />;
  if (norm.includes('filter') || norm.includes('clean')) return <Filter className={className} style={{ color: color || '#6366f1' }} />;
  if (norm.includes('rnn') || norm.includes('repeat')) return <Repeat className={className} style={{ color: color || '#a855f7' }} />;
  if (norm.includes('transfer')) return <ArrowRightLeft className={className} style={{ color: color || '#10b981' }} />;

  return <Code2 className={className} style={{ color: color || '#00f2fe' }} />;
};
