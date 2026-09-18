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
    degree: "Bachelor Degree",
    field: "Computer Science / Information Technology",
    institution: "KFA Business School",
    status: "Currently Studying",
    currentTerm: "8th Semester",
    period: "Ongoing (8th Semester)",
    location: "Kathmandu, Nepal",
    description:
      "Advanced undergraduate academic program focusing on computer science, computational intelligence, data structures, algorithms, machine learning, and quantitative analytics.",
    highlights: [
      "Currently in 8th Semester (Final Year)",
      "Major Capstone: Brain Tumor Segmentation using Deep Learning (VGG16 + U-Net)",
      "Core focus on Applied Artificial Intelligence, Data Engineering, and Machine Learning systems"
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
      "Higher secondary education with a rigorous focus on physical sciences, mathematics, and foundational computer programming principles.",
    highlights: [
      "Rigorous foundations in Advanced Mathematics, Physics, and Logic",
      "Early programming fundamentals and computational reasoning",
      "Active participant in science and technology academic clubs"
    ]
  }
];
