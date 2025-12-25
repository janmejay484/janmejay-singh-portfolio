import React from "react";
import { motion } from "framer-motion";
import styles from "./styles/Skills.module.css";

const skillGroups = [
  {
    title: "Frontend Engineering",
    items: [
      "React.js", 
      "Next.js", 
      "Tailwind CSS", 
      "Material UI", 
      "Vite",
      "HTML5", 
      "CSS3", 
      "JavaScript", 
      "TypeScript"
    ],
    desc: "Modern, responsive, and performance-focused UIs with smooth user experience and clean component architecture"
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
    desc: "Robust backend systems with secure authentication, structured APIs, and scalable server-side logic"
  },
  {
    title: "Databases",
    items: ["MongoDB", "SQL"],
    desc: "Efficient database design, data modeling, and optimized queries for reliable application performance"
  },
  {
    title: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "OpenCV", "FinBERT", "LSTM / Prophet"],
    desc: "Applied AI for NLP, forecasting, and vision with real-world deployments, explainable outputs, and production-ready pipelines"
  },
  {
    title: "Deployment & DevOps",
    items: ["Vercel", "AWS S3", "Docker", "Railway", "Slack Webhooks"],
    desc: "Production-grade deployments, CI-ready workflows, cloud hosting, automation, and monitoring integrations"
  }
];


export default function SkillsShowcase() {
  return (
    <section className={styles.section} id="skills">

      <div className="max-w-6xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.title}
        >
          Tech Stack & Capabilities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.subtitle}
        >
          {/* Showcasing engineering depth through live UI, production APIs, and deployed systems */}
        </motion.p>

        <div className={styles.grid}>
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={styles.card}
            >
              
              <div className={styles.groupHeader}>
                <span className={styles.dot}></span>
                <h3 className={styles.groupTitle}>{group.title}</h3>
              </div>

              <p className={styles.groupDesc}>{group.desc}</p>

              <div className={styles.badges}>
                {group.items.map(skill => (
                  <span key={skill} className={styles.badge}>{skill}</span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={styles.footer}
        >
          {/* Built, deployed, and iterated production systems using modern JavaScript and Python toolchains. */}
        </motion.div>

      </div>
    </section>
  );
}
