import { 
  Code, 
  PieChart, 
  PenTool, 
  Bot, 
  Brain, 
  TrendingUp, 
  Users, 
  BarChart3 
} from 'lucide-react';
import { Education, Experience, Project, SkillCategory, Certification } from './types';

export const CONTACT_INFO = {
  name: "Saboor Ali Khan",
  phone: "+92 318 4816235",
  email: "Saboor12124@gmail.com",
  linkedin: "www.linkedin.com/in/SAK124",
  github: "github.com/SAK-124",
  tagline: "Business Analyst & Data Strategist",
  bio: "Forward-thinking Business Administration student with a strong foundation in Data Analysis and AI. Experienced in educational leadership and strategic marketing research. Passionate about leveraging R, Python, and modern AI frameworks to solve complex business problems."
};

export const EDUCATION_DATA: Education[] = [
  {
    institution: "Institute of Business Administration - Karachi",
    degree: "Bachelor of Business Administration (BBA)",
    period: "2022 - 2026"
  },
  {
    institution: "The International School - Karachi",
    degree: "International Baccalaureate Diploma Program (IB DP)",
    period: "2019 - 2021"
  },
  {
    institution: "The International School - Karachi",
    degree: "IB Middle Year Program (IB MYP)",
    period: "2014 - 2019"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Interim School Director & Coordinator",
    company: "Lecon High",
    period: "March 2022 – May 2022",
    achievements: [
      "Assumed leadership during the temporary absence of the proprietor, ensuring continuity of quality education for 150+ students.",
      "Supervised a team of 8 teachers and collaborated closely with a coordinator to manage daily operations.",
      "Developed strong organizational and people-management skills through effective crisis leadership."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Multilevel Depression Risk Modeling",
    subtitle: "R based Data Analysis",
    description: [
      "Built hierarchical logistic regression and decision-tree classifiers on a 27K-record depression dataset (86% accuracy).",
      "Engineered features combining mental-health and socio-economic data (Gini, literacy, crime rate).",
      "Automated preprocessing in R with KNN imputation and scaling pipeline.",
      "Applied mixed-effects modeling to quantify city-level variation."
    ],
    tags: ["R Language", "Machine Learning", "Healthcare Analytics"],
    icon: Brain
  },
  {
    title: "Marketing Strategy Enhancement",
    subtitle: "FoodPanda Project",
    description: [
      "Led a team of five in a comprehensive marketing research campaign to identify strategic flaws.",
      "Coordinated surveying of 100+ participants for critical consumer insights.",
      "Conducted in-depth interviews with Sales Managers to refine recommendations."
    ],
    tags: ["Strategy", "Leadership", "Consumer Research"],
    icon: TrendingUp
  },
  {
    title: "Impact of Meme Marketing",
    subtitle: "Consumer Engagement Study",
    description: [
      "Executed mixed-method research on meme-based content in the ultra-processed foods sector.",
      "Surveyed 100+ consumers and organized 5 focus groups for qualitative validation.",
      "Synthesized findings into strategic recommendations for digital brand engagement."
    ],
    tags: ["Digital Marketing", "Qualitative Research", "Focus Groups"],
    icon: Users
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Data & Programming",
    skills: ["Python", "R Language", "Data Analysis", "Logistic Regression", "Decision Trees"],
    icon: Code
  },
  {
    category: "Artificial Intelligence",
    skills: ["Antigravity", "n8n", "AI Studio", "Prompt Engineering", "Loveable", "Sora", "Veo 3", "Codex", "Cursor"],
    icon: Bot
  },
  {
    category: "Business & Tools",
    skills: ["Microsoft Office Suite", "Project Management", "Strategic Planning", "Crisis Leadership"],
    icon: BarChart3
  },
  {
    category: "Creative & Media",
    skills: ["Adobe Photoshop", "Canva", "Lightroom", "Filmora", "Video Editing"],
    icon: PenTool
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: "Bloomberg Market Concepts (BMC)",
    issuer: "Bloomberg for Education",
    date: "August 2025",
    details: "Certificate ID: GNWunMo8YGL5Z38MQj33u3FJ"
  },
  {
    name: "Microsoft PowerPoint",
    issuer: "LinkedIn Assessment",
    details: "Top 5% of 11.3 million people"
  },
  {
    name: "Microsoft Excel",
    issuer: "LinkedIn Assessment",
    details: "Top 15% of 30 million people"
  },
  {
    name: "Python (Basic)",
    issuer: "Mimo",
    details: "Certification gained through Mimo"
  }
];

export const GITHUB_REPOS = [
  {
    name: "antigravity-attendance-automator",
    description: "Automated attendance tracking system leveraging Antigravity, n8n workflows, and AI Studio for seamless real-time data integration.",
    language: "Python",
    stars: 24,
    forks: 6,
    updated: "2 days ago",
    url: "https://github.com/SAK-124"
  },
  {
    name: "depression-risk-analysis-r",
    description: "Hierarchical logistic regression models on 27K health records to identify risk factors with 86% accuracy.",
    language: "R",
    stars: 15,
    forks: 4,
    updated: "1 week ago",
    url: "https://github.com/SAK-124"
  },
  {
    name: "marketing-analytics-suite",
    description: "Strategic tools for analyzing consumer behavior and meme marketing impact using Python and Pandas.",
    language: "Jupyter Notebook",
    stars: 9,
    forks: 2,
    updated: "2 weeks ago",
    url: "https://github.com/SAK-124"
  }
];