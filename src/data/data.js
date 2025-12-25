import PosterSkillAnalyzer from '../assets/Skill-analyzer.png'
import PosterJournal from '../assets/journal-app.png'
import PosterReadIT from '../assets/readit.png'
import PosterTravel from '../assets/travel-recommender.png'
import PosterPortfolio from '../assets/portfolio.png'
import PosterVAudio from '../assets/PosterVAudio.png'
import MyPhoto from '../assets/janmejay.jpeg'
import MyLogo from '../assets/logo.jpg'
import PosterRTIS from '../assets/RTIS.png'
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
    desc: "MERN-powered career guidance platform enhanced with AI to analyze skills, portfolio, and resume, providing personalized insights, growth paths, and smart recommendations.",
    badges: ["React","Node.js","MongoDB","AI","Express.js","JWT" ,"API fetching"],
    image: PosterSkillAnalyzer,
    live:"https://skill-analyzer-frontend.onrender.com/",
  },
  {
    title: "📝 Journal App",
    repo: "journal-app",
    desc: "Secure full-stack journaling platform with secured JWT/authentication, allowing users to create, manage, and reflect on personal entries with a smooth and intuitive experience.",
    badges: ["Ejs","Express.js","Node.js","MongoDB","CRUD","JWT","Render","Postman","GIT/GITHUB"],
    image: PosterJournal,
    live:"https://journal-app-pldc.onrender.com/",
  },
  {
  title: "📈 RTIS — Real-Time Strategic & Intelligence System",
  repo: "real-time-market-intelligence",
  desc: "An AI-powered market intelligence platform built with Streamlit. It combines real-time market data, FinBERT sentiment analysis, Prophet-based price forecasting, live news analytics, and automated Slack risk alerts into a unified interactive dashboard.",
  badges: ["Python", "Machine Learning", "NLP", "Prophet", "FinBERT", "YFinance", "Data Visualization"],
  image: PosterRTIS, 
  live: "https://janmejay484-real-time-market-intelligence-app-ycp2v9.streamlit.app/", 
},
  {
    title: "🔊 ReadIT",
    repo: "ReadIT",
    desc: "Text-to-Speech with voice commands, file import/export, local storage",
    badges: ["React","Web Speech API","JavaScript"],
    image: PosterReadIT,
    live:"https://readit-fd5d.onrender.com/",
  },
  {
    title: "🧭 Travel Recommender System",
    repo: "Travel-Recommender-system",
    desc: "ML suggestions by budget, duration, region & trip type",
    badges: ["Python","scikit-learn","Gradio"],
    image: PosterTravel,
    live:"https://huggingface.co/spaces/janmejay484/tarvel-destination-recommeder",
  },
  {
  title: "🌐 Personal Portfolio Website",
  repo: "janmejay-singh-portfolio",
  desc: "A modern, responsive developer portfolio showcasing projects, skills, and experience with interactive animations.",
  badges: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
  image: PosterPortfolio,
  live:"https://janmejay-singh-portfolio.vercel.app/",
},
{
  title: "🎵 V-Audio — Video & YouTube to MP3",
  repo: "V-Audio",
  desc: "A full-stack app to extract high-quality MP3 audio from local video uploads or YouTube links with a clean, responsive UI.(⚠️ YouTube extraction may require refreshed cookies due to rate-limiting — contact me for demo.)",
  badges: ["React", "Material UI", "Express", "ffmpeg", "yt-dlp"],
  image: PosterVAudio,
  live: "https://v-audio.vercel.app/",
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
  period: "Oct 2025 — Dec 2025",
  location: "Remote",
  bullets: [
    "Developed an AI-powered Real-Time Strategic Intelligence System integrating market data, sentiment analysis, and forecasting.",
    "Implemented FinBERT-based sentiment analysis and Prophet time-series forecasting to extract actionable insights.",
    "Built an interactive analytics dashboard with automated alerts to support decision-making.",
    "Collaborated with a cross-functional team, contributing to architecture, development, and deployment workflows."
  ],
  tech: ["Python", "Machine Learning", "NLP", "Prophet", "FinBERT", "APIs", "Data Visualization"]
}
,
  {
    company: "MaddyCustom.com",
    role: "Full-Stack Developer",
    period: "Jan 2025 — Jul 2025",
    location: "Remote",
    bullets: [
      "Developed responsive and user-friendly e-commerce website features.",
      "Optimized performance and SEO for better user engagement and reach.",
      "Collaborated with the team to deliver scalable frontend solutions.",
    ],
    tech: ["React", "Next.js", "JavaScript", "CSS Modules", "Material UI", "Github", "Figma","AWS"],
  },
];

