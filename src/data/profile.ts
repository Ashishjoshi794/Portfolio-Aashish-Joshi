export interface ProfileData {
  fullName: string;
  displayName: string;
  badge: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  aboutDescription: string[];
  educationBrief: {
    current: string;
    institution: string;
    level: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  resumeUrl: string;
  profilePhoto: string;
  statistics: {
    id: string;
    label: string;
    value: number;
    suffix: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  fullName: "Ashish Raj Joshi",
  displayName: "Ashish Joshi",
  badge: "Data Scientist | Machine Learning & AI Enthusiast",
  title: "Hi, I'm Ashish Joshi",
  subtitle: "Data Scientist | Machine Learning & AI Enthusiast",
  heroDescription:
    "I build data-driven solutions using Python, machine learning, deep learning, NLP, computer vision, data analysis, and AI. I enjoy turning real-world problems into practical intelligent systems.",
  aboutDescription: [
    "I am an aspiring Data Scientist currently studying in the 8th semester of my Bachelor's degree at KFA Business School.",
    "Driven by a strong curiosity for artificial intelligence and analytical problem solving, I focus on transforming data into actionable insights and building practical machine learning models.",
    "My academic and project experience covers Python, Data Analysis, Machine Learning, Deep Learning, NLP, Computer Vision, Time Series, Web Scraping, and Generative AI. I have built hands-on predictive models, image segmentation architectures, interactive Streamlit dashboards, and automated data pipelines across my public repositories."
  ],
  educationBrief: {
    level: "Bachelor",
    institution: "KFA Business School",
    current: "8th Semester"
  },
  contact: {
    email: "aj1921321@gmail.com",
    phone: "9849890790",
    location: "Kathmandu, Nepal",
    github: "https://github.com/Ashishjoshi794",
    linkedin: "https://www.linkedin.com/in/ashish-joshi-68b21b3a8/"
  },
  resumeUrl: "/resume/Ashish_Joshi_Resume.pdf",
  profilePhoto: "/assets/ashish-profile.jpg",
  statistics: [
    {
      id: "repos",
      label: "GitHub Repositories",
      value: 21,
      suffix: "",
      description: "Public code repositories on GitHub"
    },
    {
      id: "projects",
      label: "Featured Projects",
      value: 4,
      suffix: "",
      description: "End-to-end ML, DL & CV projects"
    },
    {
      id: "skills",
      label: "Core Competencies",
      value: 18,
      suffix: "+",
      description: "Python, PyTorch, Scikit-learn, SQL & ML techniques"
    },
    {
      id: "final-project",
      label: "Final Year Capstone",
      value: 1,
      suffix: "",
      description: "Brain Tumor Segmentation from MRI Images"
    }
  ]
};
