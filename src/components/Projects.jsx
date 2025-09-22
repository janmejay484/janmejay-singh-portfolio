import styles from './styles/Projects.module.css'
import { projects, stats } from '../data/data'

export default function Projects(){
  return (
    <section id="projects" className="container">
      <h2 className="sec-title">🌟 Featured Projects</h2>
      <p className="sec-sub">Built with love for clean UX & DX</p>

      <div className={styles.grid}>
        {projects.map(p=>{
          const cardImg = `https://github-readme-stats.vercel.app/api/pin/?username=${stats.user}&repo=${p.repo}&show_owner=true&theme=${stats.theme}&border_radius=14`
          return (
            <article key={p.repo} className={'card ' + styles.item}>
              <a href={`https://github.com/${stats.user}/${p.repo}`} target="_blank" rel="noreferrer">
                <img src={cardImg} alt={`${p.title} repo card`} />
              </a>
              <div className={styles.meta}>
                <h3>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.badges.map((b,i)=>(
                    <span key={i} className="badge">{b}</span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
