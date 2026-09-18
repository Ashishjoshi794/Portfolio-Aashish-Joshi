import React, { useEffect, useState } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profile';

export const openResumeModal = () => {
  window.dispatchEvent(new CustomEvent('open-resume-modal'));
};

interface ResumeModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen: externalIsOpen,
  onClose: externalOnClose
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isControlled = externalIsOpen !== undefined;
  const isVisible = isControlled ? externalIsOpen : internalIsOpen;

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    }
    setInternalIsOpen(false);
  };

  useEffect(() => {
    const handleOpenEvent = () => setInternalIsOpen(true);
    window.addEventListener('open-resume-modal', handleOpenEvent);
    return () => window.removeEventListener('open-resume-modal', handleOpenEvent);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    if (isVisible) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-xl animate-fade-in"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Ashish Joshi Official Resume Preview"
    >
      <div
        className="relative w-full max-w-5xl my-4 sm:my-8 rounded-3xl bg-dark-900 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden text-left flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-dark-950/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  Ashish Joshi — Official Resume
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> Original & Verified
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Data Science & Machine Learning Specialist
              </p>
            </div>
          </div>

          {/* Action buttons: Open in new tab, Download, Close */}
          <div className="flex items-center gap-2 ml-auto">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
              title="Open full PDF in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <a
              href={profileData.resumeUrl}
              download="Ashish_Joshi_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 hover:brightness-110 shadow-glow-cyan transition-all"
              title="Download PDF to your computer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="relative w-full h-[72vh] sm:h-[78vh] bg-dark-950 overflow-hidden flex flex-col">
          <iframe
            src={`${profileData.resumeUrl}#toolbar=1&navpanes=0`}
            className="w-full h-full border-none"
            title="Ashish Joshi Resume PDF"
          />

          {/* Fallback bar */}
          <div className="p-3 bg-dark-900 border-t border-white/10 text-center text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <span>Viewing official resume: <strong>Ashish_Joshi_Resume.pdf</strong></span>
            <div className="flex items-center gap-3">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                View Fullscreen
              </a>
              <span className="text-white/20">•</span>
              <a
                href={profileData.resumeUrl}
                download="Ashish_Joshi_Resume.pdf"
                className="text-cyan-400 font-semibold hover:underline"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
