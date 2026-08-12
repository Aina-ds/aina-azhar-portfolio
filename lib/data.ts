// Single source of truth — every field below is taken directly from
// Aina Azhar's resume. Do not add content that isn't sourced from it.

export const profile = {
  name: "Aina Azhar",
  initials: "AA",
  title: "Data Science | Machine Learning | Data Analytics",
  shortTitle: "Data Science Graduate",
  location: "Islamabad, Pakistan",
  phone: "+92 330 9280134",
  email: "ainaazhar2019@gmail.com",
  linkedin: "https://www.linkedin.com/in/aina-azhar-a29a8b34a/",
  github: "https://github.com/Aina-ds",
  summary:
    "Data Science graduate with hands-on experience building machine learning models, conducting exploratory data analysis, and developing data visualizations across 15+ independent projects. Applied EDA and model-training techniques to real-world datasets during a Data Science internship. Proficient in Python, R, SQL, and the core ML/data stack (Pandas, NumPy, Scikit-learn). Seeking a full-time role in Data Science, Machine Learning, or Data Analytics to apply analytical and predictive modeling skills in a professional environment.",
};

export const stats = [
  { label: "CGPA", value: "3.53", suffix: "/4.0" },
  { label: "Independent Projects", value: "15", suffix: "+" },
  { label: "Best Model R²", value: "0.688", suffix: "" },
  { label: "Internship", value: "4", suffix: " wks" },
];

export const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Python", "R", "SQL", "Java", "C", "C++"],
  },
  {
    category: "Libraries & Frameworks",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Jupyter Notebook", "Git/GitHub", "Power BI", "VS Code"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Languages",
    skills: ["English — Fluent", "Urdu — Native"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  github: string;
  metric?: { label: string; value: string };
};

export const projects: Project[] = [
  {
    id: "fuel-efficiency",
    title: "Fuel Efficiency Prediction Using Polynomial Regression",
    description:
      "Built a regression model predicting vehicle fuel efficiency (MPG) from horsepower and weight using a 392-record automotive dataset.",
    bullets: [
      "Built a regression model predicting vehicle fuel efficiency (MPG) from horsepower and weight using a 392-record automotive dataset",
      "Engineered features (weight-to-horsepower ratio) and removed outliers via the IQR method to improve model input quality",
      "Trained a degree-2 Polynomial Regression model after feature scaling, achieving an R² of 0.688 and MSE of 15.91",
    ],
    tech: ["Python", "Scikit-learn", "Pandas"],
    github:
      "https://github.com/Aina-ds/Fuel-Efficiency-Prediction-Using-Polynomial-Regression",
    metric: { label: "R²", value: "0.688" },
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation Using K-Means Clustering",
    description:
      "Segmented shoppers by annual income and spending score by applying K-Means clustering to customer data.",
    bullets: [
      "Segmented shoppers by annual income and spending score by applying K-Means clustering to customer data",
      "Visualized and interpreted resulting clusters to generate actionable insights for targeted marketing strategies",
    ],
    tech: ["Python", "Scikit-learn", "Seaborn"],
    github: "https://github.com/Aina-ds/Customer-Segmentation-Using-KMeans",
  },
  {
    id: "eda-supermarket-sales",
    title: "Exploratory Data Analysis — Supermarket Sales",
    description:
      "Conducted end-to-end exploratory data analysis on supermarket sales data, identifying key sales trends and purchasing patterns.",
    bullets: [
      "Conducted end-to-end exploratory data analysis on supermarket sales data, identifying key sales trends and purchasing patterns",
      "Designed visualizations to communicate findings on product line performance and customer behavior",
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Aina-ds/EDA-Supermarket-Sales",
  },
];

export const moreProjectsNote =
  "12+ additional projects (clustering, classification, regression, SQL analytics, R)";

export const experience = [
  {
    role: "Data Science Intern",
    org: "AXI Tech",
    period: "July – August 2026",
    bullets: [
      "Built a full-stack Complaint Management System from scratch, covering UI, backend, and database design",
      "Developed the frontend with React and Tailwind CSS, and the backend with Prisma ORM on a PostgreSQL database",
      "Collected and processed real complaint data, then applied semantic analysis to automatically group complaints by category",
      "Generated text embeddings and used TF-IDF to produce initial cluster labels, refining them manually where automated labels weren't meaningful",
      "Applied K-Means clustering on the embeddings to segment complaints into coherent categories",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Estrat's",
    period: "July – August 2025",
    bullets: [
      "Completed a 4-week internship, applying Python-based data analysis and machine learning techniques to real-world datasets across multiple projects",
      "Performed exploratory data analysis and model training in collaboration with the team, translating classroom concepts into practical solutions",
      "Documented and version-controlled project work on GitHub, supporting knowledge-sharing and reproducibility",
    ],
  },
];

export const education = {
  institution: "COMSATS University Islamabad",
  location: "Islamabad, Pakistan",
  degree: "BS in Data Science",
  progress: "6th Semester",
  cgpa: "3.53/4.0",
  graduation: "Expected Graduation: January 2028",
  coursework: [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science with R",
    "Data Mining",
    "Database Systems",
    "Cybersecurity Fundamentals",
    "Data Structures",
    "Object-Oriented Programming",
    "Programming Fundamentals",
  ],
};

export const certifications = [
  { name: "Python", issuer: "Kaggle" },
  { name: "Pandas", issuer: "Kaggle" },
  { name: "Intermediate Machine Learning", issuer: "Kaggle" },
  { name: "Data Visualization", issuer: "Kaggle" },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
