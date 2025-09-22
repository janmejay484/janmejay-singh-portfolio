import styles from './styles/Skills.module.css'
import { skillsRadar } from '../data/data'

export default function Skills(){
  const radarUrl = `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify({
    type: 'radar',
    data: {
      labels: skillsRadar.labels,
      datasets: [{ label: 'Proficiency', data: skillsRadar.values, pointRadius: 2, borderWidth: 2 }]
    },
    options: { plugins:{ legend:{ display:false }}, scales:{ r:{ angleLines:{ display:false}, suggestedMin:0, suggestedMax:100, ticks:{ display:false }}}}
  }))}&w=560&h=400&bkg=transparent`;

  return (
    <section id="skills" className="container">
      <h2 className="sec-title">🧩 Skills Overview</h2>
      <p className="sec-sub">Full-stack JS • UI + API + DB</p>
      <div className={styles.wrap}>
        <img src={radarUrl} alt="skills radar" className="card"/>
        <ul className={styles.list + ' card'}>
          <li><b>Frontend:</b> React, Next.js (App Router), Tailwind, Vite</li>
          <li><b>Backend:</b> Node.js, Express, REST APIs</li>
          <li><b>Databases:</b> MongoDB (Mongoose), MySQL (Prisma/SQL)</li>
          <li><b>Languages:</b> Java, TypeScript, JavaScript</li>
          <li><b>Tools:</b> Git & GitHub, Postman, VS Code, Figma</li>
          <li><b>Exploring:</b> AI integrations, ML basics</li>
        </ul>
      </div>
    </section>
  )
}
