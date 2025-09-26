import PosterSkillAnalyzer from '../assets/Skill-analyzer.png'
import PosterJournal from '../assets/journal-app.png'
import PosterReadIT from '../assets/readit.png'
import PosterTravel from '../assets/travel-recommender.png'
import PosterPortfolio from '../assets/portfolio.png'
import MyPhoto from '../assets/janmejay.jpeg'
import MyLogo from '../assets/logo.jpg'
export const profile = {
  name: "Janmejay Singh",
  title: "Full-Stack Developer • MERN | AI/ML Explorer",
  tagline: "Always Learning and Building ⚡",
  location: "India",
  email: "janmejaysi484@gmail.com",
  github: "https://github.com/janmejay484",
  linkedin: "https://www.linkedin.com/in/janmejay-singh484/",
  avatar: "https://avatars.githubusercontent.com/u/0?v=4",
  photo: MyPhoto,
  logo: MyLogo,
  resume: "/janmejaysingh-resume.pdf",
  leetcode: 'https://leetcode.com/u/janmejay484/',
  gfg: 'https://www.geeksforgeeks.org/user/janmejay484/',
  hackerrank: 'https://www.hackerrank.com/profile/janmejaysi484',
  heroBanner: "https://capsule-render.vercel.app/api?type=waving&color=0:FF4B2B,100:FF416C&height=180&section=header&text=Hi%2C%20I'm%20Janmejay%20Singh&fontSize=40&fontColor=ffffff&animation=twinkling&fontAlignY=35",
  typing1: "https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=26&duration=3200&pause=600&color=FFFFFF&center=true&vCenter=true&width=760&lines=Full-Stack+Developer+%F0%9F%92%BB;MERN+%7C+AI+%7C+ML+Explorer+%F0%9F%9A%80;Always+Learning+and+Building+%E2%9A%A1",
};

export const badges = [
  { label: "Web Development", url: "https://img.shields.io/badge/Web%20Development-%2302569B.svg?&style=for-the-badge&logo=html5&logoColor=white" },
  { label: "Java", url: "https://img.shields.io/badge/Java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white" },
  { label: "MERN Stack", url: "https://img.shields.io/badge/MERN%20Stack-%23339933.svg?&style=for-the-badge&logo=mongodb&logoColor=white" },
  { label: "AI Integration", url: "https://img.shields.io/badge/AI%20Integration-%2300C4CC.svg?&style=for-the-badge&logo=openai&logoColor=white" },
];

export const techIcons = [
  "java","js","ts","react","nextjs","nodejs","express","mongodb",
  "html","css","tailwind","vite","git","github","figma","postman"
];

export const stats = {
  user: "janmejay484",
  theme: "radical"
};

export const skillsRadar = {
  labels: ['React','Next.js','Node','Express','MongoDB','MySQL','Java','TypeScript','JavaScript','UI/UX'],
  values: [85,80,78,75,80,65,70,82,88,72]
};

export const projects = [
  {
    title: "⚡ SkillSync",
    repo: "Skill_Analyzer",
    desc: "MERN + AI career guidance platform",
    badges: ["React","Node.js","MongoDB","AI"],
    image: PosterSkillAnalyzer,
  },
  {
    title: "📝 Journal App",
    repo: "journal-app",
    desc: "Full-stack journaling web app with secure login",
    badges: ["React","Node.js","MongoDB"],
    image: PosterJournal,
  },
  {
    title: "🔊 ReadIT",
    repo: "ReadIT",
    desc: "Text-to-Speech with voice commands, file import/export, local storage",
    badges: ["React","Web Speech API","JavaScript"],
    image: PosterReadIT,
  },
  {
    title: "🧭 Travel Recommender System",
    repo: "Travel-Recommender-system",
    desc: "ML suggestions by budget, duration, region & trip type",
    badges: ["Python","scikit-learn","Gradio"],
    image: PosterTravel,
  },
  {
  title: "🌐 Personal Portfolio Website",
  repo: "janmejay-singh-portfolio",
  desc: "A modern, responsive developer portfolio showcasing projects, skills, and experience with interactive animations.",
  badges: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
  image: PosterPortfolio,
},
];

export const quickList = [
  ["SkillSync","MERN + AI career guidance platform","React, Node.js, MongoDB, AI","https://github.com/janmejay484/Skill_Analyzer"],
  ["Journal App","Full-stack journaling with secure login","React, Node.js, MongoDB","https://github.com/janmejay484/journal-app"],
  ["ReadIT","TTS w/ voice commands, import/export, local storage","React, Web Speech API, JS","https://github.com/janmejay484/ReadIT"],
  ["Travel Recommender System","ML suggestions by budget, region & type","Python, scikit-learn, Gradio","https://github.com/janmejay484/Travel-Recommender-system"],
];

// ABOUT
export const about = {
  blurb:
    "I’m a Computer Science Engineering student and developer passionate about creating modern, scalable, and user-friendly applications. I specialize in React and MERN stack development while exploring AI/ML to bring intelligence into web experiences.",
  highlights: [
    "Frontend expertise with React, Vite, and Tailwind CSS",
    "MERN stack development with clean, scalable architecture",
    "Next.js with App Router, API routes & SSR/ISR",
    "AI/ML integrations for real-world use cases",
  ],
};

// EXPERIENCE (newest first)
export const experience = [
  {
    company: "Infosys Springboard",
    role: "AI Intern",
    period: "Sep 2025 — Present",
    location: "Remote",
    bullets: [
      "Working on AI/ML-driven solutions for real-world applications.",
      "Experimenting with large language models and embeddings for intelligent tools.",
      "Collaborating on projects integrating AI into web platforms.",
    ],
    tech: ["Python", "Machine Learning", "AI/ML", "LLMs", "APIs"],
  },
  {
    company: "MaddyCustom.com",
    role: "Frontend Developer",
    period: "Jan 2025 — Jul 2025",
    location: "Remote",
    bullets: [
      "Developed responsive and user-friendly e-commerce website features.",
      "Optimized performance and SEO for better user engagement and reach.",
      "Collaborated with the team to deliver scalable frontend solutions.",
    ],
    tech: ["React", "JavaScript", "CSS Modules", "Tailwind", "Vite"],
  },
];

