import styles from './styles/Projects.module.css'
import { projects, stats } from '../data/data'

export default function Projects(){
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className="sec-title">🌟 Featured Projects</h2>
        <p className="sec-sub">Built for clean UX & delightful DX</p>

        <div className={styles.grid}>
          {projects.map((p, i) => {
            const repoUrl = `https://github.com/${stats.user}/${p.repo}`
            const fallbackImg = `https://github-readme-stats.vercel.app/api/pin/?username=${stats.user}&repo=${p.repo}&show_owner=true&theme=${stats.theme}&border_radius=14`
            const coverImg = p.image || fallbackImg

            return (
              <article key={p.repo} className={styles.card} style={{'--delay': `${i * 90}ms`}}>
                <a className={styles.cover} href={repoUrl} target="_blank" rel="noreferrer">
                  <img src={coverImg} alt={`${p.title} poster`} loading="lazy" />
                  <span className={styles.gradient} />
                  <span className={styles.shine} />
                </a>
                <div className={styles.body}>
                  <h3 className={styles.title}><a href={repoUrl} target="_blank" rel="noreferrer">{p.title}</a></h3>
                  <p className={styles.desc}>{p.desc}</p>
                  <div className={styles.tags}>
                    {p.badges.map((b, idx)=><span key={idx} className={styles.tag}>{b}</span>)}
                  </div>
                  <a className={styles.action} href={repoUrl} target="_blank" rel="noreferrer">View Repo ↗</a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
