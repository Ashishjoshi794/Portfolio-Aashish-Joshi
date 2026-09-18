import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Certificates } from './sections/Certificates';
import { Education } from './sections/Education';
import { GitHubSection } from './sections/GitHubSection';
import { Journey } from './sections/Journey';
import { Contact } from './sections/Contact';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackToTop } from './components/common/BackToTop';
import { PortfolioChatbot } from './components/chatbot/PortfolioChatbot';

export const App: React.FC = () => {
  return (
    <div className="relative bg-dark-950 text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <GitHubSection />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back-To-Top Button */}
      <BackToTop />

      {/* Portfolio Assistant Chatbot */}
      <PortfolioChatbot />
    </div>
  );
};

export default App;
