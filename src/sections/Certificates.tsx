import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Eye, FileText, Calendar, Hash, ExternalLink } from 'lucide-react';
import { certificatesData, CertificateItem } from '../data/certificates';
import { CertificateModal } from '../components/certificates/CertificateModal';
import { TiltCard } from '../components/common/TiltCard';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-24 relative bg-dark-950 bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC & PROFESSIONAL CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
            Licenses & <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Accredited qualifications demonstrating mastery of machine learning pipelines, algorithms, and analytical foundations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificatesData.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TiltCard maxTilt={5} scale={1.01} className="h-full">
                <div className="h-full flex flex-col justify-between rounded-3xl bg-dark-900/80 border border-white/10 hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 overflow-hidden group p-6 sm:p-7">
                  
                  <div className="space-y-5 text-left">
                    {/* Top Preview Image Container with Glow */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-white/10 shadow-lg cursor-pointer group/img"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-dark-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 rounded-xl bg-dark-900/90 text-cyan-300 font-semibold text-xs border border-cyan-500/40 shadow-glow-cyan flex items-center gap-1.5">
                          <Eye className="w-4 h-4" /> Click to View
                        </span>
                      </div>
                    </div>

                    {/* Certificate Title & Issuer */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono font-semibold text-cyan-400">
                          {cert.issuer}
                        </span>
                        {cert.verified && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            <CheckCircle2 className="w-3 h-3" /> VERIFIED
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Awarded to: <strong className="text-slate-200">{cert.recipient}</strong>
                      </p>
                    </div>

                    {/* Metadata Grid: Date & Code */}
                    <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-dark-950/70 border border-white/5 text-xs font-mono">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{cert.issueDate}</span>
                      </div>
                      {cert.credentialCode ? (
                        <div className="flex items-center gap-2 text-slate-300">
                          <Hash className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{cert.credentialCode}</span>
                        </div>
                      ) : (
                        <div className="text-slate-300 italic">Academic Verified</div>
                      )}
                    </div>

                    {/* Skills Covered Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-dark-950 text-slate-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action: View Certificate Lightbox */}
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 hover:brightness-110 shadow-glow-cyan transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>VIEW CERTIFICATE</span>
                    </button>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
