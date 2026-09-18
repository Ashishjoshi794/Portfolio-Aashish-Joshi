export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  status: string;
  currentTerm?: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "edu-bachelor",
    degree: "Bachelor of Cyber Security (BCS.IT)",
    field: "Cyber Security & Information Technology",
    institution: "KFA Business School",
    status: "Currently Studying",
    currentTerm: "8th Semester",
    period: "Ongoing (8th Semester)",
    location: "Kathmandu, Nepal",
    description:
      "Undergraduate degree program combining cyber security principles, machine learning, data science, deep learning, software engineering, and analytical problem-solving.",
    highlights: [
      "Currently studying in the 8th Semester",
      "Major Capstone: Brain Tumor Segmentation from MRI Images using PyTorch (VGG16 + U-Net Hybrid)",
      "Core focus on Data Science, Machine Learning, Deep Learning, and Cyber Security"
    ]
  },
  {
    id: "edu-plus-two",
    degree: "+2 (Higher Secondary)",
    field: "Science / Computer Science",
    institution: "Golden Gate International College",
    status: "Completed",
    period: "Completed",
    location: "Kathmandu, Nepal",
    description:
      "Higher secondary education with a focus on Physical Sciences, Advanced Mathematics, and Computer Science fundamentals.",
    highlights: [
      "Foundations in Mathematics, Physics, and Computer Science",
      "Early programming logic and algorithmic reasoning"
    ]
  }
];
