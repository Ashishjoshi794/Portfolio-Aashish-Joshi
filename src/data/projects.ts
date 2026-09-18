export interface ProjectMetric {
  label: string;
  value: string;
  rawValue?: number;
  highlight?: boolean;
}

export interface ProjectDetail {
  problem: string;
  dataset: string;
  preprocessing: string;
  model: string;
  evaluation: string;
  deployment: string;
  whatIDid: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  filterCategories: string[];
  image: string;
  tech: string[];
  github: string;
  demo?: string;
  featured: boolean;
  modelArchitecture?: string;
  datasetName?: string;
  metrics?: ProjectMetric[];
  highlights?: string[];
  workflowSteps?: string[];
  details: ProjectDetail;
}

export const projectCategories = [
  "ALL",
  "MACHINE LEARNING",
  "DEEP LEARNING",
  "COMPUTER VISION"
] as const;

export type ProjectCategoryFilter = typeof projectCategories[number];

export const projectsData: ProjectItem[] = [
  {
    id: "brain-tumor-segmentation",
    title: "Brain Tumor Segmentation",
    subtitle: "Final Year Capstone Project",
    shortDescription:
      "Deep learning research segmenting brain tumors from LGG MRI scans using a hybrid VGG16 encoder and U-Net decoder architecture.",
    fullDescription:
      "Automated pixel-level brain tumor boundary delineation from Lower Grade Glioma (LGG) MRI scans developed as my Final Year Capstone project. The system leverages transfer learning by combining a pre-trained VGG16 encoder with a U-Net decoder, utilizing skip connections to preserve fine spatial details while capturing deep semantic context.",
    category: "Deep Learning · Computer Vision · U-Net · VGG16",
    filterCategories: ["DEEP LEARNING", "COMPUTER VISION"],
    image: "/assets/projects/brain-tumor-mri.svg",
    tech: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Albumentations",
      "U-Net",
      "VGG16",
      "Deep Learning",
      "Medical Imaging"
    ],
    github: "https://github.com/Ashishjoshi794/final-year-project-Brain-Tumor-Segmentation",
    featured: true,
    modelArchitecture: "VGG16 + U-Net Hybrid with Skip Connections",
    datasetName: "TCIA Lower Grade Glioma (LGG) MRI Dataset",
    highlights: [
      "Preprocessed MRI slices with contrast normalization and skull-stripping alignment.",
      "Custom Albumentations augmentation pipeline applying elastic transforms, rotations, and grid distortions.",
      "VGG16 pre-trained ImageNet encoder for spatial low-level feature extraction.",
      "Skip connections bridging encoder feature maps directly with upsampled decoder layers.",
      "Combined BCE & Dice Loss optimization for handling class imbalance in medical images."
    ],
    workflowSteps: [
      "LGG MRI Dataset Acquisition & Slice Extraction",
      "Medical Preprocessing & Contrast Normalization",
      "Albumentations Data Augmentation Pipeline",
      "Model Architecture: VGG16-Encoder + U-Net Decoder",
      "Combined BCE & Dice Loss Optimization",
      "Evaluation on Test Split (Dice, IoU, Precision, Recall)"
    ],
    details: {
      problem: "Brain tumors require precise pixel-level segmentation from MRI scans for treatment planning. Manual delineation by radiologists is time-consuming and subjective. This project aims to automate tumor boundary detection from Lower Grade Glioma (LGG) MRI images using deep learning.",
      dataset: "The Cancer Imaging Archive (TCIA) Lower Grade Glioma (LGG) MRI dataset containing patient brain scans with corresponding segmentation masks.",
      preprocessing: "MRI slices were preprocessed with contrast normalization and skull-stripping alignment. An Albumentations augmentation pipeline was applied including elastic transforms, rotations, flips, and grid distortions to increase training data diversity.",
      model: "Hybrid architecture combining a VGG16 encoder (pre-trained on ImageNet) with a U-Net decoder. Skip connections bridge encoder feature maps directly with upsampled decoder layers to preserve fine spatial details while capturing deep semantic context.",
      evaluation: "Model was evaluated using Dice Score, Intersection over Union (IoU), Precision, Recall, and pixel-level Accuracy on a held-out test split. Combined Binary Cross-Entropy and Dice Loss was used during training to handle class imbalance.",
      deployment: "Research capstone project with trained model weights and evaluation pipeline available in the GitHub repository.",
      whatIDid: [
        "Designed and implemented the VGG16 + U-Net hybrid segmentation architecture",
        "Built a custom Albumentations augmentation pipeline for medical imaging",
        "Trained the model using combined BCE & Dice Loss optimization",
        "Evaluated model performance with multiple segmentation metrics",
        "Documented the full pipeline as my Final Year degree capstone"
      ]
    }
  },
  {
    id: "employee-attrition-prediction",
    title: "Employee Attrition Prediction",
    subtitle: "Classification & Interactive Streamlit Dashboard",
    shortDescription:
      "Supervised ML project predicting employee attrition risk using the IBM HR Analytics dataset, with model benchmarking and a Streamlit dashboard.",
    fullDescription:
      "A complete Machine Learning project that predicts whether an employee is likely to leave an organization based on employee demographic, role, and satisfaction metrics. Includes exploratory data analysis, data cleaning, feature encoding, model benchmarking, hyperparameter tuning, model persistence with Joblib, and an interactive Streamlit web dashboard for real-time attrition risk scoring.",
    category: "Machine Learning · Classification · Streamlit",
    filterCategories: ["MACHINE LEARNING"],
    image: "/assets/projects/employee-attrition.svg",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Joblib",
      "Matplotlib",
      "Machine Learning"
    ],
    github: "https://github.com/Ashishjoshi794/Employee-Attrition-Prediction",
    featured: true,
    modelArchitecture: "Supervised Classification (Tuned & Benchmarked)",
    datasetName: "IBM HR Employee Attrition Dataset (1,470 records, 16 features)",
    metrics: [
      { label: "Dataset Records", value: "1,470 Rows", highlight: true },
      { label: "Input Features", value: "16 Variables" },
      { label: "Deployment", value: "Streamlit App", highlight: true }
    ],
    highlights: [
      "Extracted 16 high-impact predictors from the IBM HR dataset (OverTime, JobSatisfaction, MonthlyIncome, etc.).",
      "Handled categorical encoding, numerical scaling, and class distribution checks.",
      "Benchmarked multiple machine learning classification algorithms.",
      "Built an interactive Streamlit dashboard allowing managers to input employee details and view probability scores.",
      "Persisted trained model artifacts using Joblib for instant inference."
    ],
    workflowSteps: [
      "IBM HR Dataset Loading & Exploratory Data Analysis",
      "Data Preprocessing & Categorical Feature Encoding",
      "Feature Selection & Scaling",
      "Model Training, Comparison & Hyperparameter Tuning",
      "Model Serialization with Joblib",
      "Interactive Streamlit Application Development (app.py)"
    ],
    details: {
      problem: "Employee attrition is costly for organizations. HR departments need a data-driven tool to identify employees at risk of leaving, enabling proactive retention strategies. This project predicts attrition likelihood from employee attributes.",
      dataset: "IBM HR Analytics Employee Attrition dataset with 1,470 records and 16 features including OverTime, JobSatisfaction, MonthlyIncome, DistanceFromHome, WorkLifeBalance, and more.",
      preprocessing: "Performed exploratory data analysis, handled categorical variables with encoding, applied numerical feature scaling, and checked class distribution balance.",
      model: "Benchmarked multiple supervised classification algorithms (Logistic Regression, Decision Tree, Random Forest, etc.) with hyperparameter tuning. Best model selected based on evaluation metrics.",
      evaluation: "Models were evaluated using classification metrics. The final selected model was serialized with Joblib for deployment.",
      deployment: "Deployed as an interactive Streamlit web application (app.py) where users can input employee details and receive real-time attrition risk probability scores.",
      whatIDid: [
        "Conducted exploratory data analysis on the IBM HR dataset",
        "Preprocessed and encoded categorical features for model training",
        "Benchmarked multiple classification algorithms and tuned hyperparameters",
        "Serialized the best model using Joblib for production inference",
        "Built an interactive Streamlit dashboard for real-time attrition risk scoring"
      ]
    }
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    subtitle: "Regression Modeling & Streamlit Valuation App",
    shortDescription:
      "ML regression model predicting residential property selling prices using the Ames Housing dataset, with Extra Trees Regressor and a Streamlit app.",
    fullDescription:
      "A machine learning regression system that predicts residential real estate selling prices based on property characteristics. Explores and cleans the Ames Housing dataset, performs feature selection, evaluates multiple regression algorithms using RMSE, MAE, and R², performs cross-validation, and selects the Extra Trees Regressor as the final model. Deployed with an interactive Streamlit web application for real-time house valuation.",
    category: "Machine Learning · Regression",
    filterCategories: ["MACHINE LEARNING"],
    image: "/assets/projects/house-price.svg",
    tech: [
      "Python",
      "Scikit-learn",
      "Extra Trees Regressor",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Streamlit"
    ],
    github: "https://github.com/Ashishjoshi794/House_Price_Prediction",
    featured: true,
    modelArchitecture: "Extra Trees Regressor (Selected Best Model)",
    datasetName: "Ames Housing Dataset",
    metrics: [
      { label: "Best Model", value: "Extra Trees", highlight: true },
      { label: "Evaluation", value: "RMSE, MAE, R²" },
      { label: "Deployment", value: "Streamlit App", highlight: true }
    ],
    highlights: [
      "Comprehensive data cleaning, missing value handling, and outlier inspection on Ames Housing records.",
      "Feature engineering and selection focusing on key drivers of residential property valuation.",
      "Benchmarked multiple regression algorithms using cross-validation.",
      "Selected Extra Trees Regressor as top performer based on error metric minimization.",
      "Created an interactive Streamlit UI allowing users to input home attributes and view estimated selling prices."
    ],
    workflowSteps: [
      "Ames Housing Dataset Ingestion & EDA",
      "Data Cleaning & Imputation of Missing Property Values",
      "Feature Selection & Engineering",
      "Regression Model Training & Cross-Validation Benchmarking",
      "Selection of Top-Performing Extra Trees Regressor",
      "Streamlit UI Implementation for Real-Time Price Inferences"
    ],
    details: {
      problem: "Estimating fair residential property selling prices is challenging due to multiple property attributes. This project builds a regression model to predict house prices, helping buyers and sellers make informed decisions.",
      dataset: "Ames Housing dataset containing residential property records with features like lot area, overall quality, year built, number of rooms, garage area, and many more.",
      preprocessing: "Performed comprehensive data cleaning including handling missing values, outlier inspection, and feature engineering. Selected key property attributes that drive valuation.",
      model: "Trained and benchmarked multiple regression models. Extra Trees Regressor was selected as the best-performing model after cross-validation comparison.",
      evaluation: "Models were evaluated using RMSE (Root Mean Squared Error), MAE (Mean Absolute Error), and R² (coefficient of determination) with cross-validation.",
      deployment: "Deployed as an interactive Streamlit web application (app.py) where users can input property characteristics and receive real-time estimated selling prices.",
      whatIDid: [
        "Performed exploratory data analysis and cleaned the Ames Housing dataset",
        "Engineered and selected key features driving property valuation",
        "Trained and benchmarked multiple regression algorithms",
        "Selected Extra Trees Regressor as the best model via cross-validation",
        "Built a Streamlit web app for real-time house price prediction"
      ]
    }
  },
  {
    id: "dog-and-cat-classification",
    title: "Dog & Cat Classification",
    subtitle: "Transfer Learning (MobileNetV2) & Streamlit App",
    shortDescription:
      "Deep learning image classifier using MobileNetV2 with confidence thresholding to detect out-of-distribution non-pet images.",
    fullDescription:
      "A computer vision deep learning application that classifies images as Cat or Dog using transfer learning with MobileNetV2 on the Kaggle Dogs vs Cats dataset. Features an out-of-distribution (OOD) safety check: predictions with less than 70% confidence trigger a 'Not a Cat or Dog' alert. Deployed as a multi-page interactive Streamlit web app.",
    category: "CNN · Computer Vision · Deep Learning",
    filterCategories: ["DEEP LEARNING", "COMPUTER VISION"],
    image: "/assets/projects/dog-cat-classification.svg",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "MobileNetV2",
      "Streamlit",
      "Pillow",
      "NumPy"
    ],
    github: "https://github.com/Ashishjoshi794/Dog-and-Cat-Classification",
    featured: true,
    modelArchitecture: "Transfer Learning with MobileNetV2",
    datasetName: "Kaggle Cat vs Dog Dataset",
    metrics: [
      { label: "Architecture", value: "MobileNetV2", highlight: true },
      { label: "OOD Safety", value: "< 70% Cutoff", highlight: true },
      { label: "Interface", value: "Streamlit Multi-Page" }
    ],
    highlights: [
      "Transfer learning utilizing MobileNetV2 pre-trained on ImageNet for efficient inference.",
      "Real-time image upload supporting .jpg, .jpeg, and .png formats.",
      "Confidence thresholding (< 70%) to flag ambiguous or non-pet inputs automatically.",
      "Interactive multi-page Streamlit dashboard with live predictions and confidence charts.",
      "Saved Keras model pipeline ready for lightweight deployment."
    ],
    workflowSteps: [
      "Dataset Preparation & Image Resizing (224x224)",
      "MobileNetV2 Feature Extraction & Dense Classification Head",
      "Model Training with Binary Cross-Entropy Loss",
      "Out-of-Distribution Confidence Thresholding Logic",
      "Streamlit Multi-Page Application Construction",
      "Interactive Testing with Diverse Image Samples"
    ],
    details: {
      problem: "Image classification of pets (cats vs dogs) with a safety mechanism to handle non-pet images. Standard classifiers force a prediction even on irrelevant inputs, so an out-of-distribution detection system is needed.",
      dataset: "Kaggle Dogs vs Cats dataset containing labeled images of cats and dogs for binary classification training.",
      preprocessing: "Images resized to 224×224 pixels to match MobileNetV2 input requirements. Standard image normalization and augmentation applied during training.",
      model: "Transfer learning with MobileNetV2 architecture pre-trained on ImageNet. A custom dense classification head was added on top for binary cat/dog classification with Binary Cross-Entropy loss.",
      evaluation: "Model evaluated on validation accuracy and confidence calibration. A custom confidence threshold (< 70%) was implemented to detect out-of-distribution inputs that are neither cats nor dogs.",
      deployment: "Deployed as a multi-page interactive Streamlit web application supporting real-time image uploads with live prediction results and confidence charts.",
      whatIDid: [
        "Fine-tuned MobileNetV2 on the Kaggle Dogs vs Cats dataset",
        "Implemented out-of-distribution detection with confidence thresholding",
        "Built a multi-page Streamlit dashboard with image upload and live predictions",
        "Added confidence score visualization and OOD warning alerts",
        "Saved and optimized the Keras model pipeline for deployment"
      ]
    }
  }
];
