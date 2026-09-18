import { profileData } from './profile';
import { projectsData } from './projects';
import { certificatesData } from './certificates';

export interface ChatResponse {
  text: string;
  links?: {
    label: string;
    url: string;
    external?: boolean;
  }[];
}

export const suggestedQuestions = [
  "Who is Ashish?",
  "What are his skills?",
  "What projects has he built?",
  "Tell me about Brain Tumor Segmentation",
  "What is his GitHub?",
  "How can I contact Ashish?",
  "What did he study?",
  "What certificates does he have?"
];

export function getBotResponse(userQuery: string): ChatResponse {
  // Normalize query: lower case, strip extra whitespace and common punctuation
  const clean = userQuery.toLowerCase().replace(/[?!.,;:'"()]/g, ' ').trim();
  const tokens = clean.split(/\s+/).filter(Boolean);

  const hasWord = (word: string) => tokens.includes(word);
  const hasPhrase = (phrase: string) => clean.includes(phrase);
  const hasAnyWord = (...words: string[]) => words.some((w) => tokens.includes(w));

  // 1. Greetings
  if (
    hasAnyWord('hi', 'hello', 'hey', 'greetings', 'howdy', 'sup', 'morning', 'afternoon', 'evening') ||
    clean === 'hi' ||
    clean === 'hello'
  ) {
    return {
      text: `Hello! I am Ashish's Portfolio Assistant. I can answer questions about his background, GitHub projects, technical skills, certificates, education, and contact details. What would you like to know?`,
      links: [
        { label: "View Projects", url: "#projects" },
        { label: "View Skills", url: "#skills" },
        { label: "Contact Info", url: "#contact" }
      ]
    };
  }

  // 2. Who is Ashish / Bio / About / Identity
  if (
    hasPhrase('who is') ||
    hasPhrase('who are you') ||
    hasPhrase('what is your name') ||
    hasPhrase('tell me about yourself') ||
    hasPhrase('tell me about ashish') ||
    hasAnyWord('bio', 'background', 'profile', 'introduce', 'introduction') ||
    (hasWord('about') && !hasAnyWord('tumor', 'attrition', 'house', 'dog', 'cat', 'project'))
  ) {
    return {
      text: `${profileData.fullName} (${profileData.displayName}) is an aspiring Data Scientist and Machine Learning & AI Enthusiast. He is currently in the 8th semester of his Bachelor's degree at KFA Business School, after completing +2 at Golden Gate International College.\n\nHe specializes in building data-driven systems with Python, Machine Learning, Deep Learning, Computer Vision, and NLP.`,
      links: [
        { label: "GitHub Profile", url: profileData.contact.github, external: true },
        { label: "LinkedIn Profile", url: profileData.contact.linkedin, external: true },
        { label: "About Section", url: "#about" }
      ]
    };
  }

  // 3. Brain Tumor Segmentation Project
  if (
    hasPhrase('brain tumor') ||
    hasWord('tumor') ||
    hasWord('mri') ||
    hasPhrase('capstone') ||
    hasPhrase('final year') ||
    hasWord('segmentation') ||
    hasWord('unet') ||
    hasPhrase('u-net') ||
    hasWord('vgg16')
  ) {
    const proj = projectsData.find((p) => p.id === 'brain-tumor-segmentation');
    return {
      text: `Brain Tumor Segmentation is Ashish's Final Year Capstone Project:\n\n• Architecture: VGG16 pre-trained encoder + U-Net decoder with skip connections.\n• Dataset: TCIA Lower Grade Glioma (LGG) MRI dataset.\n• Metrics: Dice Score: 0.9124 | IoU Score: 0.8856 | Accuracy: 0.9980.\n• Focus: Automated pixel-level tumor boundary delineation using Albumentations augmentation and combined BCE/Dice loss.`,
      links: [
        { label: "View Repository on GitHub", url: proj ? proj.github : profileData.contact.github, external: true },
        { label: "See in Projects Section", url: "#projects" }
      ]
    };
  }

  // 4. Employee Attrition Project
  if (
    hasPhrase('employee attrition') ||
    hasWord('attrition') ||
    hasWord('employee') ||
    hasWord('churn') ||
    hasPhrase('hr analytics')
  ) {
    const proj = projectsData.find((p) => p.id === 'employee-attrition-prediction');
    return {
      text: `Employee Attrition Prediction is a machine learning classification project:\n\n• Dataset: IBM HR Analytics dataset (1,470 records, 16 features).\n• Approach: Data cleaning, categorical encoding, model benchmarking (Random Forest / XGBoost), and SMOTE handling for class imbalance.\n• Deployment: Interactive Streamlit web dashboard for real-time attrition risk scoring.`,
      links: [
        { label: "View on GitHub", url: proj ? proj.github : profileData.contact.github, external: true },
        { label: "See in Projects Section", url: "#projects" }
      ]
    };
  }

  // 5. House Price Project
  if (
    hasPhrase('house price') ||
    hasPhrase('home price') ||
    hasWord('house') ||
    hasWord('housing') ||
    hasWord('ames') ||
    hasPhrase('real estate')
  ) {
    const proj = projectsData.find((p) => p.id === 'house-price-prediction');
    return {
      text: `House Price Prediction is a machine learning regression project:\n\n• Dataset: Ames Housing dataset with extensive feature engineering and log transforms.\n• Model: Extra Trees Regressor selected as best performing model after benchmarking RMSE, MAE, and R².\n• Deployment: Streamlit web app for instant property valuation estimation.`,
      links: [
        { label: "View on GitHub", url: proj ? proj.github : profileData.contact.github, external: true },
        { label: "See in Projects Section", url: "#projects" }
      ]
    };
  }

  // 6. Dog & Cat Classification Project
  if (
    hasWord('dog') ||
    hasWord('cat') ||
    hasPhrase('dog and cat') ||
    hasPhrase('dogs vs cats') ||
    hasWord('mobilenet') ||
    hasPhrase('image classification')
  ) {
    const proj = projectsData.find((p) => p.id === 'dog-and-cat-classification');
    return {
      text: `Dog & Cat Classification is a computer vision web app using MobileNetV2:\n\n• Dataset: Kaggle Dogs vs Cats dataset.\n• Architecture: Transfer Learning with MobileNetV2 feature extractor and custom dense classifier.\n• Key Safety Feature: Confidence thresholding (< 70%) detects out-of-distribution / invalid inputs.\n• Deployment: Streamlit app supporting real-time photo uploads.`,
      links: [
        { label: "View on GitHub", url: proj ? proj.github : profileData.contact.github, external: true },
        { label: "See in Projects Section", url: "#projects" }
      ]
    };
  }

  // 7. General Projects Query
  if (
    hasWord('projects') ||
    hasWord('project') ||
    hasPhrase('what has he built') ||
    hasPhrase('what projects') ||
    hasPhrase('portfolio work') ||
    hasWord('built')
  ) {
    const list = projectsData.map((p, i) => `${i + 1}. ${p.title} — ${p.category}`).join('\n');
    return {
      text: `Ashish has built 4 featured end-to-end projects:\n\n${list}\n\nAll projects include open-source code and technical details on GitHub.`,
      links: [
        { label: "Explore Projects Section", url: "#projects" },
        { label: "View GitHub Repositories", url: profileData.contact.github, external: true }
      ]
    };
  }

  // 8. Technical Skills / Tech Stack
  if (
    hasAnyWord('skill', 'skills', 'stack', 'technologies', 'technology', 'tools', 'languages', 'frameworks') ||
    hasAnyWord('python', 'sql', 'pytorch', 'tensorflow', 'pandas', 'numpy', 'scikit', 'sklearn', 'opencv', 'tableau', 'streamlit')
  ) {
    return {
      text: `Ashish's technical stack includes:\n\n• Languages & Core: Python, SQL, Git, GitHub\n• Data Analysis & Viz: NumPy, Pandas, Matplotlib, Seaborn, Tableau\n• Machine Learning: Linear/Logistic Regression, KNN, Decision Tree, Random Forest, SVM, Naive Bayes, XGBoost, Feature Engineering\n• Deep Learning & Vision: PyTorch, TensorFlow, CNN, RNN, U-Net, OpenCV\n• Specialized: NLP, Generative AI (Groq API), Time Series, Web Scraping`,
      links: [
        { label: "Explore Skills Section", url: "#skills" }
      ]
    };
  }

  // 9. Certificates & Credentials
  if (
    hasAnyWord('certificate', 'certificates', 'certification', 'certifications', 'credential', 'credentials', 'simplilearn', 'license')
  ) {
    const certList = certificatesData.map((c) => `• ${c.title} — ${c.issuer} (${c.issueDate}, Code: ${c.credentialCode})`).join('\n');
    return {
      text: `Ashish holds 2 verified credentials from Simplilearn SkillUp:\n\n${certList}\n\nYou can view and verify certificates with direct PDF downloads in the Certificates section.`,
      links: [
        { label: "View Certificates", url: "#certificates" }
      ]
    };
  }

  // 10. Education / College / Degree
  if (
    hasAnyWord('study', 'studies', 'studying', 'education', 'college', 'university', 'degree', 'bachelor', 'bachelors', 'kfa', 'school', 'semester', 'academic') ||
    hasPhrase('golden gate')
  ) {
    return {
      text: `Ashish's academic background:\n\n1. Bachelor's Degree (Ongoing — 8th Semester) at KFA Business School.\n2. +2 (Higher Secondary, Science) at Golden Gate International College.\n\nHis final year research is centered on deep learning medical image segmentation.`,
      links: [
        { label: "View Education Timeline", url: "#education" }
      ]
    };
  }

  // 11. Work Experience / Job History
  if (
    hasAnyWord('experience', 'job', 'company', 'work', 'employment', 'career', 'internship', 'intern')
  ) {
    return {
      text: `Ashish is currently a student in his 8th semester at KFA Business School. He has focused on building a strong portfolio of hands-on academic and open-source projects on GitHub rather than corporate work history.`,
      links: [
        { label: "View Projects", url: "#projects" },
        { label: "Contact for Opportunities", url: "#contact" }
      ]
    };
  }

  // 12. Contact / Email / Phone / Reach
  if (
    hasAnyWord('contact', 'email', 'phone', 'call', 'reach', 'message', 'hire', 'touch', 'talk', 'number', 'address', 'location') ||
    hasPhrase('how to reach') ||
    hasPhrase('get in touch')
  ) {
    return {
      text: `You can reach Ashish directly via:\n\n• Email: ${profileData.contact.email}\n• Phone: ${profileData.contact.phone}\n• LinkedIn: linkedin.com/in/ashish-joshi-68b21b3a8/\n• GitHub: github.com/Ashishjoshi794`,
      links: [
        { label: "Send Email", url: `mailto:${profileData.contact.email}` },
        { label: "Call", url: `tel:${profileData.contact.phone}` },
        { label: "LinkedIn Profile", url: profileData.contact.linkedin, external: true }
      ]
    };
  }

  // 13. GitHub
  if (
    hasAnyWord('github', 'repo', 'repos', 'repository', 'repositories', 'code', 'git')
  ) {
    return {
      text: `Ashish's GitHub profile: https://github.com/Ashishjoshi794\n\nIt features 21 public repositories spanning Machine Learning, Computer Vision, Deep Learning, and Streamlit applications.`,
      links: [
        { label: "Visit GitHub (@Ashishjoshi794)", url: profileData.contact.github, external: true }
      ]
    };
  }

  // 14. LinkedIn
  if (
    hasWord('linkedin') ||
    hasWord('social')
  ) {
    return {
      text: `Ashish's LinkedIn: https://www.linkedin.com/in/ashish-joshi-68b21b3a8/`,
      links: [
        { label: "Visit LinkedIn", url: profileData.contact.linkedin, external: true }
      ]
    };
  }

  // 15. Resume
  if (
    hasAnyWord('resume', 'cv') ||
    hasPhrase('curriculum vitae')
  ) {
    return {
      text: `You can download Ashish's official resume using the Resume link below.`,
      links: [
        { label: "Download Resume PDF", url: profileData.resumeUrl }
      ]
    };
  }

  // 16. Help / Capabilities
  if (
    hasAnyWord('help', 'options', 'menu', 'commands', 'assist') ||
    hasPhrase('what can you do')
  ) {
    return {
      text: `I can help you explore:\n\n1. Ashish's 4 core GitHub Projects\n2. Technical Skill Stack (ML, DL, CV, NLP)\n3. Verified Simplilearn Certificates\n4. Academic Background (KFA 8th Semester)\n5. Direct Contact Channels (Email, Phone, LinkedIn)`,
      links: [
        { label: "Browse Projects", url: "#projects" },
        { label: "Check Skills", url: "#skills" },
        { label: "Contact Details", url: "#contact" }
      ]
    };
  }

  // Default Fallback
  return {
    text: `I can answer questions about Ashish's portfolio, skills, projects, education, certificates, and contact information.`,
    links: [
      { label: "Browse Projects", url: "#projects" },
      { label: "Check Skills", url: "#skills" },
      { label: "Contact Ashish", url: "#contact" }
    ]
  };
}
