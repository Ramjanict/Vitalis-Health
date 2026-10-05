export interface ClientProject {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: "Ongoing" | "Completed" | "Upcoming";
  image: string;
  images?: string[];
  description: string;
  overview: string;
  developersNote: string;
  keyFeatures: string[];
  deliverables: string[];
  challenges: string[];
  futurePlans: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  timeline: string;
  role: string;
  teamMembers: { name: string; role: string }[];
}

export const vitalisProject: ClientProject = {
  slug: "vitalis",
  title: "Vitalis Health",
  tagline: "AI-Powered Health & Wellness Admin Dashboard",
  category: "Healthcare & AI SaaS",
  status: "Completed",
  image:
    "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/dashboard-hero.jpg",
  images: [
    "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/dashboard-hero.jpg",
    "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/health-vitals.jpg",
    "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/ai-wellness-assistant.jpg",
    "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/nutrition-scanner.jpg",
    "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/wellness-nudges.jpg",
  ],
  description:
    "An enterprise-grade, responsive healthcare and wellness management dashboard delivering real-time patient biometrics, wearable device synchronization, AI health companion logs, nutrition database tracking, and proactive wellness nudges.",
  overview:
    "Vitalis is an all-in-one AI-driven healthcare and wellness administration platform designed for health coaches, clinics, and medical practitioners. It bridges continuous patient vitals monitoring from wearable ecosystems (Apple Health, Fitbit, Garmin, Whoop, Oura) with proactive habit nudges, AI diagnostic chat monitoring, biomarker lab report workflows, and macronutrient intake analytics.",
  developersNote:
    "Architected and developed the full standalone frontend application using Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Implemented a zero-dependency local reactive mock state layer with Redux Toolkit, interactive biometric charts using Recharts, client-side authentication guards, and comprehensive modal workflows for user profiles, lab reports, and habit triggers.",
  keyFeatures: [
    "Real-time patient biometrics monitoring (Heart Rate ECG, SpO2, Sleep Stages, Active Minutes)",
    "Wearable ecosystem integration support (Apple Watch, Fitbit, Garmin, Whoop, Oura)",
    "AI Wellness Companion chat session monitoring and automated triage logs",
    "Clinical lab report management pipeline with biomarker review workflows",
    "Nutrition database with calorie, macronutrient breakdown, and food scanning trends",
    "Behavioral wellness nudges and habit reminder scheduler with engagement metrics",
    "Interactive Recharts visualizations for user growth, health trends, and vital ranges",
    "Admin security center with session controls, credentials management, and theme preferences",
  ],
  deliverables: [
    "Complete Next.js 16 App Router & React 19 architecture with TypeScript",
    "Interactive executive KPI analytics dashboard with dynamic Recharts",
    "User & patient management system with debounced search and profile inspection modals",
    "Standalone reactive mock data layer with instant local persistence",
    "Client-side protected route authentication guards and demo sign-in workflow",
    "Production deployment configuration optimized for Vercel",
  ],
  challenges: [
    "Decoupling the application from external backend dependencies into an autonomous, high-performance static client with persistent mock state",
    "Designing multi-metric Recharts visualizations for complex physiological vitals while maintaining fluid 60fps responsiveness",
    "Structuring comprehensive modal forms and detail dialogs for patient records, lab findings, and behavioral nudge automations",
  ],
  futurePlans: [
    "Direct Bluetooth Web API synchronization with local health monitors and smart scales",
    "FHIR and HL7 standard export pipelines for hospital EHR system interoperability",
    "Predictive early warning anomaly detection models using real-time vital streams",
  ],
  tags: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "Radix UI",
    "Recharts",
    "Lucide React",
    "Vercel",
  ],
  liveUrl: "https://surajashray-ten.vercel.app",
  githubUrl: "https://github.com/Ramjanict/Vitalis-Health",
  timeline: "2025 - Present",
  role: "Frontend Engineer",
  teamMembers: [{ name: "Md Ramjan Ali", role: "Frontend Engineer" }],
};
