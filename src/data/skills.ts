export interface SkillItem {
  name: string;
  category: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming-data",
    title: "PROGRAMMING & DATA MANAGEMENT",
    shortTitle: "Programming & Data",
    description: "Core programming languages, numerical computation, and database querying foundations.",
    skills: [
      {
        name: "Python",
        category: "Programming & Data",
        description: "Primary language for data science, machine learning pipelines, deep learning architectures, and automation.",
        iconName: "Python",
        tags: ["Core Language", "Data Science", "Scripting"]
      },
      {
        name: "NumPy",
        category: "Programming & Data",
        description: "N-dimensional array computation, linear algebra vectorization, numerical transformations, and matrix operations.",
        iconName: "NumPy",
        tags: ["Numerical", "Tensors", "Linear Algebra"]
      },
      {
        name: "Pandas",
        category: "Programming & Data",
        description: "Data manipulation, dataframe transformations, missing value handling, merging, and exploratory aggregation.",
        iconName: "Pandas",
        tags: ["Dataframes", "Wrangling", "Tabular Data"]
      },
      {
        name: "SQL",
        category: "Programming & Data",
        description: "Relational database querying, multi-table joins, aggregations, data extraction, and schema filtering.",
        iconName: "SQL",
        tags: ["RDBMS", "Data Extraction", "Querying"]
      },
      {
        name: "Git",
        category: "Programming & Data",
        description: "Distributed version control, branch management, commit histories, and collaborative workflows.",
        iconName: "Git",
        tags: ["Version Control", "VCS", "Collaboration"]
      },
      {
        name: "GitHub",
        category: "Programming & Data",
        description: "Open-source repository management, issue tracking, project documentation, and code sharing.",
        iconName: "GitHub",
        tags: ["Open Source", "Repositories", "Code Hosting"]
      }
    ]
  },
  {
    id: "data-visualization",
    title: "DATA VISUALIZATION & BI",
    shortTitle: "Data Visualization",
    description: "Statistical charting, exploratory visual patterns, and interactive business intelligence dashboards.",
    skills: [
      {
        name: "Matplotlib",
        category: "Visualization",
        description: "2D statistical plotting library for histograms, scatter plots, subplots, and customized figures.",
        iconName: "Matplotlib",
        tags: ["Plotting", "Charts", "Visuals"]
      },
      {
        name: "Seaborn",
        category: "Visualization",
        description: "Statistical data visualization framework for correlation heatmaps, pairplots, and distribution curves.",
        iconName: "Seaborn",
        tags: ["Heatmaps", "Distributions", "Statistical"]
      },
      {
        name: "Tableau",
        category: "Visualization",
        description: "Interactive visual analytics and business intelligence dashboards for communicating metrics.",
        iconName: "Tableau",
        tags: ["BI", "Dashboards", "Business Analytics"]
      }
    ]
  },
  {
    id: "machine-learning",
    title: "MACHINE LEARNING ALGORITHMS & PIPELINES",
    shortTitle: "Machine Learning",
    description: "Supervised and unsupervised statistical learning, feature engineering, and cross-validation.",
    skills: [
      {
        name: "Linear Regression",
        category: "Machine Learning",
        description: "Predicting continuous outcomes and modeling linear feature relationships with regression.",
        iconName: "Linear Regression",
        tags: ["Supervised", "Regression", "Continuous"]
      },
      {
        name: "Logistic Regression",
        category: "Machine Learning",
        description: "Binary and multi-class classification based on log-odds and probability thresholds.",
        iconName: "Logistic Regression",
        tags: ["Supervised", "Classification", "Probabilities"]
      },
      {
        name: "KNN (k-Nearest Neighbors)",
        category: "Machine Learning",
        description: "Instance-based learning utilizing distance metrics across multi-dimensional feature spaces.",
        iconName: "KNN",
        tags: ["Distance-based", "Non-parametric", "Classification"]
      },
      {
        name: "Decision Tree",
        category: "Machine Learning",
        description: "Tree-based decision rules using entropy, information gain, and Gini impurity criteria.",
        iconName: "Decision Tree",
        tags: ["Tree-based", "Interpretable", "Splitting"]
      },
      {
        name: "Random Forest",
        category: "Machine Learning",
        description: "Ensemble bagging method aggregating multiple decision trees to mitigate variance and reduce overfitting.",
        iconName: "Random Forest",
        tags: ["Ensemble", "Bagging", "Feature Importance"]
      },
      {
        name: "SVM (Support Vector Machines)",
        category: "Machine Learning",
        description: "Maximum-margin hyperplanes and kernel transformations for linearly non-separable feature boundaries.",
        iconName: "SVM",
        tags: ["Kernel Trick", "Max Margin", "Classification"]
      },
      {
        name: "Naive Bayes",
        category: "Machine Learning",
        description: "Probabilistic classifier applying Bayes theorem with feature independence assumptions.",
        iconName: "Naive Bayes",
        tags: ["Probabilistic", "Bayesian", "Text & Tabular"]
      },
      {
        name: "Clustering",
        category: "Machine Learning",
        description: "Unsupervised cluster identification using K-Means and distance metrics to segment unstructured data.",
        iconName: "Clustering",
        tags: ["Unsupervised", "K-Means", "Grouping"]
      },
      {
        name: "XGBoost",
        category: "Machine Learning",
        description: "Optimized gradient boosted decision tree framework engineered for high performance and competition accuracy.",
        iconName: "XGBoost",
        tags: ["Gradient Boosting", "Ensemble", "High Speed"]
      },
      {
        name: "Feature Engineering",
        category: "Machine Learning",
        description: "Encoding categorical variables, polynomial features, dimension reduction, and interaction term creation.",
        iconName: "Feature Engineering",
        tags: ["Transformations", "Encoding", "Scaling"]
      },
      {
        name: "Data Preprocessing",
        category: "Machine Learning",
        description: "Systematic handling of missing values, statistical imputations, outlier detection, and data normalization.",
        iconName: "Data Preprocessing",
        tags: ["Data Cleaning", "Imputation", "Standardization"]
      },
      {
        name: "Model Evaluation",
        category: "Machine Learning",
        description: "Stratified K-Fold cross validation, Confusion Matrix, Precision, Recall, F1 Score, ROC-AUC, and RMSE.",
        iconName: "Model Evaluation",
        tags: ["Cross Validation", "ROC-AUC", "F1 Score"]
      }
    ]
  },
  {
    id: "deep-learning",
    title: "DEEP LEARNING & COMPUTER VISION",
    shortTitle: "Deep Learning & Vision",
    description: "Neural network architectures, spatial convolution, biomedical segmentation, and computer vision.",
    skills: [
      {
        name: "Deep Learning",
        category: "Deep Learning",
        description: "Neural network fundamentals, multi-layer perceptrons, forward propagation, loss functions, and backpropagation.",
        iconName: "Deep Learning",
        tags: ["PyTorch", "TensorFlow", "Neural Nets"]
      },
      {
        name: "CNN (Convolutional Neural Networks)",
        category: "Deep Learning",
        description: "Convolution kernels, pooling layers, and feature map extraction for image classification and feature learning.",
        iconName: "CNN",
        tags: ["Computer Vision", "Convolutions", "Feature Maps"]
      },
      {
        name: "RNN (Recurrent Neural Networks)",
        category: "Deep Learning",
        description: "Recurrent state connections designed for sequential observations, temporal patterns, and time series data.",
        iconName: "RNN",
        tags: ["Sequential", "Temporal", "Memory"]
      },
      {
        name: "U-Net",
        category: "Deep Learning",
        description: "Encoder-decoder contraction and expansion architecture with skip connections for pixel-level semantic segmentation.",
        iconName: "U-Net",
        tags: ["Medical AI", "Segmentation", "Skip Connections"]
      },
      {
        name: "Computer Vision",
        category: "Deep Learning",
        description: "Image processing with OpenCV, thresholding, color spaces (HSV/HLS), image filtering, and data augmentation.",
        iconName: "Computer Vision",
        tags: ["OpenCV", "Image Processing", "Filters"]
      }
    ]
  },
  {
    id: "ai-other",
    title: "NLP, GENERATIVE AI & SPECIALIZED DOMAINS",
    shortTitle: "NLP & AI Domains",
    description: "Text processing, modern language model workflows, time series forecasting, and automated web scraping.",
    skills: [
      {
        name: "NLP (Natural Language Processing)",
        category: "AI & Other",
        description: "Text normalization, tokenization, TF-IDF vectorization, stopword filtering, and sentiment classification.",
        iconName: "NLP",
        tags: ["Text Mining", "TF-IDF", "Tokenization"]
      },
      {
        name: "Generative AI",
        category: "AI & Other",
        description: "Prompt engineering, direct LLM API integration (e.g. Groq), multi-modal bot architecture, and assistants.",
        iconName: "Generative AI",
        tags: ["Groq API", "LLMs", "AI Assistants"]
      },
      {
        name: "Time Series",
        category: "AI & Other",
        description: "Temporal trend decomposition, seasonality identification, stationarity testing, and historical modeling.",
        iconName: "Time Series",
        tags: ["Trend", "Seasonality", "Forecasting"]
      },
      {
        name: "Web Scraping",
        category: "AI & Other",
        description: "Automated HTML parsing with BeautifulSoup, HTTP request handling, DOM tree extraction, and dataset generation.",
        iconName: "Web Scraping",
        tags: ["BeautifulSoup", "Requests", "Data Harvesting"]
      }
    ]
  }
];
