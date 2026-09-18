import React, { useEffect, useState } from 'react';
import { X, Copy, Check, ExternalLink, Award, FileText } from 'lucide-react';
import { CertificateItem } from '../../data/certificates';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  const handleCopyCode = () => {
    if (certificate?.credentialCode) {
      navigator.clipboard.writeText(certificate.credentialCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl my-8 rounded-3xl bg-dark-900 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-dark-950/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="font-display font-bold text-sm text-white">
              Official Credential Verification
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400"
            aria-label="Close certificate lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Certificate Render */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white relative">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Certificate Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-dark-950/80 border border-white/5">
            <div>
              <div className="text-xs font-mono text-slate-400">Course / Title</div>
              <div className="text-sm font-bold text-white mt-0.5">{certificate.title}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Recipient</div>
              <div className="text-sm font-bold text-cyan-300 mt-0.5">{certificate.recipient}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Issue Date</div>
              <div className="text-sm font-bold text-white mt-0.5">{certificate.issueDate}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Certificate Code</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-sm font-mono font-bold text-emerald-400">
                  {certificate.credentialCode || 'Coursework'}
                </span>
                {certificate.credentialCode && (
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Actions & Verification Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="text-xs text-slate-400 max-w-md">
              {certificate.description}
            </div>

            <div className="flex items-center gap-3">
              {certificate.pdfUrl && (
                <a
                  href={certificate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-dark-950 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 shadow-glow-cyan transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Original PDF</span>
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
