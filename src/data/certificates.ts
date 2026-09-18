export interface CertificateItem {
  id: string;
  title: string;
  recipient: string;
  issuer: string;
  issueDate: string;
  credentialCode: string;
  verified: boolean;
  image: string;
  pdfUrl: string;
  description: string;
  skillsLearned: string[];
}

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-ml-python",
    title: "Machine Learning Using Python",
    recipient: "Ashish Raj Joshi",
    issuer: "Simplilearn SkillUp",
    issueDate: "10th July 2026",
    credentialCode: "10451551",
    verified: true,
    image: "/assets/certificates/simplilearn-ml-python.svg",
    pdfUrl: "/assets/certificates/simplilearn-ml-python.pdf",
    description:
      "Official certificate of completion demonstrating mastery of core Machine Learning workflows using Python, supervised and unsupervised learning algorithms, model evaluation, and predictive implementations.",
    skillsLearned: [
      "Machine Learning with Python",
      "Model Evaluation Metrics",
      "Supervised Algorithms",
      "Predictive Analytics"
    ]
  },
  {
    id: "cert-intro-ds",
    title: "Introduction to Data Science",
    recipient: "Ashish Raj Joshi",
    issuer: "Simplilearn SkillUp",
    issueDate: "7th September 2026",
    credentialCode: "10697911",
    verified: true,
    image: "/assets/certificates/simplilearn-intro-data-science.svg",
    pdfUrl: "/assets/certificates/simplilearn-intro-data-science.pdf",
    description:
      "Official certificate of completion from Simplilearn SkillUp demonstrating completion of the online course in Introduction to Data Science, covering foundational data science concepts, statistical methodologies, and exploratory analysis.",
    skillsLearned: [
      "Data Science Foundations",
      "Exploratory Data Analysis",
      "Statistical Methods",
      "Data Preprocessing"
    ]
  }
];
