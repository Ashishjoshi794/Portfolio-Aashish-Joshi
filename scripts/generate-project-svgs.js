import fs from 'fs';
import path from 'path';

const dir = path.resolve('public/assets/projects');
fs.mkdirSync(dir, { recursive: true });

const fraudSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <rect width="800" height="500" fill="#070d1d"/>
  <!-- Grid -->
  <g stroke="rgba(255,255,255,0.05)" stroke-width="1">
    <line x1="0" y1="250" x2="800" y2="250"/>
    <line x1="400" y1="0" x2="400" y2="500"/>
  </g>
  <!-- Credit Card Hologram -->
  <g transform="translate(120, 120)">
    <rect width="320" height="190" rx="16" fill="rgba(30,41,59,0.7)" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="50" cy="50" r="16" fill="#f59e0b"/>
    <circle cx="75" cy="50" r="16" fill="#ef4444" fill-opacity="0.8"/>
    <rect x="35" y="100" width="70" height="14" rx="4" fill="#94a3b8"/>
    <text x="35" y="150" font-family="'JetBrains Mono', monospace" font-size="16" fill="#f8fafc">••••  ••••  ••••  9412</text>
    <text x="210" y="50" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#ef4444">FLAGGED: SMOTE</text>
  </g>
  <!-- Confusion Matrix & SMOTE Graph -->
  <g transform="translate(480, 110)">
    <rect width="260" height="280" rx="16" fill="rgba(15,23,42,0.85)" stroke="rgba(6,182,212,0.3)" stroke-width="1"/>
    <text x="20" y="35" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="700" fill="#f8fafc">SMOTE Class Balancing</text>
    <text x="20" y="70" font-family="'JetBrains Mono', monospace" font-size="12" fill="#94a3b8">Minority (Fraud):</text>
    <rect x="20" y="80" width="220" height="16" rx="4" fill="#1e293b"/>
    <rect x="20" y="80" width="190" height="16" rx="4" fill="#ef4444"/>
    <text x="20" y="130" font-family="'JetBrains Mono', monospace" font-size="12" fill="#94a3b8">Synthesized Balance:</text>
    <rect x="20" y="140" width="220" height="16" rx="4" fill="#1e293b"/>
    <rect x="20" y="140" width="220" height="16" rx="4" fill="#06b6d4"/>
    <text x="20" y="195" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600" fill="#38bdf8">Top Classifier: XGBoost</text>
    <text x="20" y="225" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600" fill="#10b981">PR-AUC Optimized</text>
  </g>
</svg>`;

const diabetesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <rect width="800" height="500" fill="#070d1d"/>
  <g transform="translate(100, 100)">
    <rect width="600" height="300" rx="16" fill="rgba(15,23,42,0.8)" stroke="rgba(56,189,248,0.2)" stroke-width="1"/>
    <text x="30" y="45" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#38bdf8">Healthcare Clinical Decision Boundary</text>
    <!-- Scatter Plot simulation -->
    <circle cx="120" cy="180" r="6" fill="#10b981"/>
    <circle cx="150" cy="200" r="5" fill="#10b981"/>
    <circle cx="200" cy="160" r="6" fill="#10b981"/>
    <circle cx="240" cy="190" r="5" fill="#10b981"/>
    <circle cx="360" cy="110" r="6" fill="#ef4444"/>
    <circle cx="420" cy="90" r="7" fill="#ef4444"/>
    <circle cx="460" cy="120" r="6" fill="#ef4444"/>
    <!-- Decision Boundary Curve -->
    <path d="M50,260 Q280,180 550,80" fill="none" stroke="#8b5cf6" stroke-width="3" stroke-dasharray="6 6"/>
    <text x="30" y="260" font-family="'JetBrains Mono', monospace" font-size="12" fill="#94a3b8">Pima Indians Clinical Cohort | 8 Diagnostic Predictors</text>
  </g>
</svg>`;

const edaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <rect width="800" height="500" fill="#070d1d"/>
  <g transform="translate(80, 80)">
    <rect width="640" height="340" rx="16" fill="rgba(15,23,42,0.8)" stroke="rgba(139,92,246,0.3)" stroke-width="1"/>
    <text x="30" y="45" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#f8fafc">Exploratory Correlation Matrix & Distributions</text>
    <!-- Heatmap cells -->
    <g transform="translate(30, 80)">
      <rect x="0" y="0" width="50" height="50" rx="4" fill="#06b6d4"/>
      <rect x="55" y="0" width="50" height="50" rx="4" fill="#3b82f6"/>
      <rect x="110" y="0" width="50" height="50" rx="4" fill="#8b5cf6"/>
      <rect x="165" y="0" width="50" height="50" rx="4" fill="#a855f7"/>

      <rect x="0" y="55" width="50" height="50" rx="4" fill="#3b82f6"/>
      <rect x="55" y="55" width="50" height="50" rx="4" fill="#06b6d4"/>
      <rect x="110" y="55" width="50" height="50" rx="4" fill="#10b981"/>
      <rect x="165" y="55" width="50" height="50" rx="4" fill="#8b5cf6"/>

      <rect x="0" y="110" width="50" height="50" rx="4" fill="#8b5cf6"/>
      <rect x="55" y="110" width="50" height="50" rx="4" fill="#10b981"/>
      <rect x="110" y="110" width="50" height="50" rx="4" fill="#06b6d4"/>
      <rect x="165" y="110" width="50" height="50" rx="4" fill="#3b82f6"/>
    </g>
    <!-- Bell curves -->
    <g transform="translate(320, 180)">
      <path d="M0,0 Q60,-100 120,0 T240,0" fill="none" stroke="#00f2fe" stroke-width="3"/>
      <text x="0" y="30" font-family="'JetBrains Mono', monospace" font-size="12" fill="#94a3b8">Bivariate Density Plot & Outlier Trimming</text>
    </g>
  </g>
</svg>`;

const scrapingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <rect width="800" height="500" fill="#070d1d"/>
  <g transform="translate(100, 80)">
    <rect width="600" height="340" rx="16" fill="rgba(15,23,42,0.8)" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
    <text x="30" y="45" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#10b981">Web Scraping & Pipeline Architecture</text>
    <rect x="30" y="80" width="160" height="70" rx="8" fill="#1e293b" stroke="#64748b"/>
    <text x="45" y="120" font-family="'JetBrains Mono', monospace" font-size="13" fill="#38bdf8">HTML / DOM</text>
    <path d="M195,115 L245,115" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
    <rect x="250" y="80" width="160" height="70" rx="8" fill="#1e293b" stroke="#10b981"/>
    <text x="265" y="120" font-family="'JetBrains Mono', monospace" font-size="13" fill="#10b981">BeautifulSoup</text>
    <path d="M415,115 L465,115" stroke="#10b981" stroke-width="2"/>
    <rect x="470" y="80" width="100" height="70" rx="8" fill="#1e293b" stroke="#8b5cf6"/>
    <text x="485" y="120" font-family="'JetBrains Mono', monospace" font-size="13" fill="#8b5cf6">CSV/DF</text>
    <text x="30" y="240" font-family="'JetBrains Mono', monospace" font-size="13" fill="#94a3b8">> Automated Throttling, User-Agent Rotation, Regex Sanitization</text>
  </g>
</svg>`;

const timeSeriesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <rect width="800" height="500" fill="#070d1d"/>
  <g transform="translate(100, 100)">
    <rect width="600" height="300" rx="16" fill="rgba(15,23,42,0.8)" stroke="rgba(6,182,212,0.3)" stroke-width="1"/>
    <text x="30" y="45" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#06b6d4">Time Series Decomposition & Forecasting</text>
    <path d="M30,220 Q120,130 180,190 T300,120 T420,160 T540,80" fill="none" stroke="#00f2fe" stroke-width="3"/>
    <path d="M420,160 L540,80" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4 4"/>
    <text x="30" y="260" font-family="'JetBrains Mono', monospace" font-size="12" fill="#94a3b8">Historical Data (Cyan) vs Walk-Forward Forecast (Amber)</text>
  </g>
</svg>`;

const nlpSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <rect width="800" height="500" fill="#070d1d"/>
  <g transform="translate(100, 100)">
    <rect width="600" height="300" rx="16" fill="rgba(15,23,42,0.8)" stroke="rgba(168,85,247,0.3)" stroke-width="1"/>
    <text x="30" y="45" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#a855f7">NLP Sentiment Token Embeddings</text>
    <circle cx="150" cy="160" r="10" fill="#06b6d4"/>
    <text x="170" y="165" font-family="'JetBrains Mono', monospace" font-size="13" fill="#cbd5e1">"Intelligent"</text>
    <circle cx="340" cy="120" r="12" fill="#8b5cf6"/>
    <text x="360" y="125" font-family="'JetBrains Mono', monospace" font-size="13" fill="#cbd5e1">"Predictive"</text>
    <circle cx="480" cy="200" r="14" fill="#10b981"/>
    <text x="505" y="205" font-family="'JetBrains Mono', monospace" font-size="13" fill="#cbd5e1">"Optimized"</text>
    <text x="30" y="260" font-family="'JetBrains Mono', monospace" font-size="12" fill="#94a3b8">TF-IDF High-Dimensional Word Space</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(dir, 'credit-card-fraud.svg'), fraudSvg);
fs.writeFileSync(path.join(dir, 'diabetes-prediction.svg'), diabetesSvg);
fs.writeFileSync(path.join(dir, 'eda-analysis.svg'), edaSvg);
fs.writeFileSync(path.join(dir, 'web-scraping.svg'), scrapingSvg);
fs.writeFileSync(path.join(dir, 'time-series.svg'), timeSeriesSvg);
fs.writeFileSync(path.join(dir, 'nlp-sentiment.svg'), nlpSvg);

console.log('Project preview SVGs created successfully!');
