export interface JourneyStep {
  step: number;
  title: string;
  tagline: string;
  description: string;
  keySkills: string[];
  iconName: string;
  status: "completed" | "current";
}

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Python Programming",
    tagline: "The Core Foundation",
    description: "Mastered Python syntax, OOP, data structures, algorithms, functional paradigms, and package ecosystems.",
    keySkills: ["Python", "OOP", "NumPy Basics", "Scripting"],
    iconName: "Code2",
    status: "completed"
  },
  {
    step: 2,
    title: "Data Analysis & EDA",
    tagline: "Extracting Insights from Noise",
    description: "Learned deep data wrangling with Pandas, statistical plotting with Matplotlib & Seaborn, and outlier detection.",
    keySkills: ["Pandas", "Matplotlib", "Seaborn", "EDA"],
    iconName: "BarChart3",
    status: "completed"
  },
  {
    step: 3,
    title: "Machine Learning",
    tagline: "Statistical Predictive Modeling",
    description: "Trained regression, classification, and ensemble algorithms (Random Forest, XGBoost) with rigorous cross-validation.",
    keySkills: ["Scikit-learn", "XGBoost", "SMOTE", "Model Validation"],
    iconName: "BrainCircuit",
    status: "completed"
  },
  {
    step: 4,
    title: "Deep Learning",
    tagline: "Neural Networks & Backpropagation",
    description: "Studied deep neural networks, CNNs, optimization routines (Adam, SGD), loss landscapes, and PyTorch tensors.",
    keySkills: ["PyTorch", "CNNs", "DNNs", "Loss Optimization"],
    iconName: "Layers",
    status: "completed"
  },
  {
    step: 5,
    title: "Natural Language Processing (NLP)",
    tagline: "Understanding Human Text",
    description: "Explored text normalization, TF-IDF vectorization, n-grams, word embeddings, and sentiment classification.",
    keySkills: ["Tokenization", "TF-IDF", "Sentiment Analysis", "NLTK"],
    iconName: "FileText",
    status: "completed"
  },
  {
    step: 6,
    title: "Computer Vision",
    tagline: "Visual Feature Extraction",
    description: "Implemented image transformations, OpenCV filters, Albumentations augmentations, and spatial convolution models.",
    keySkills: ["OpenCV", "Image Augmentation", "Feature Maps", "PyTorch Vision"],
    iconName: "Eye",
    status: "completed"
  },
  {
    step: 7,
    title: "Time Series Analysis",
    tagline: "Sequential Pattern Forecasting",
    description: "Deconstructed seasonal trends, stationarity tests (ADF), autocorrelation, and lag-based autoregressive forecasting.",
    keySkills: ["Trend Decomposition", "Stationarity", "ARIMA", "Rolling Windows"],
    iconName: "Clock",
    status: "completed"
  },
  {
    step: 8,
    title: "Generative AI",
    tagline: "Modern Intelligent Workflows",
    description: "Investigated LLM prompting architectures, embeddings, generative pipelines, and modern AI engineering paradigms.",
    keySkills: ["Prompt Engineering", "LLM APIs", "Embeddings", "AI Assistants"],
    iconName: "Bot",
    status: "completed"
  },
  {
    step: 9,
    title: "Real-World Projects",
    tagline: "Production Practicality & GitHub",
    description: "Built end-to-end data pipelines, financial fraud detection, clinical disease prediction, and automated web scrapers.",
    keySkills: ["Credit Card Fraud", "Diabetes ML", "Web Scraping", "GitHub Portfolio"],
    iconName: "FolderGit2",
    status: "completed"
  },
  {
    step: 10,
    title: "Final Year Capstone Project",
    tagline: "Peak Undergraduate Research",
    description: "Engineered Brain Tumor Segmentation from LGG MRI images using VGG16 + U-Net, achieving 0.9124 Dice Score and 0.9980 accuracy.",
    keySkills: ["VGG16 + U-Net", "LGG MRI", "Medical Segmentation", "0.9124 Dice"],
    iconName: "Award",
    status: "current"
  }
];
