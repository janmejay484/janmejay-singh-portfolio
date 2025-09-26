import styles from './styles/Experience.module.css'
import { experience } from '../data/data'

export default function Experience(){
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>💼 Experience</h2>
          <p className={styles.sub}>What I’ve been building lately</p>
        </div>

        <ol className={styles.timeline}>
          {experience.map((job, i)=>(
            <li key={i} className={styles.item} style={{'--d': `${i*120}ms`}}>
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.card}>
                <div className={styles.top}>
                  <h3 className={styles.role}>{job.role}</h3>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.company}>{job.company}</span>
                  <span className={styles.sep}>•</span>
                  <span className={styles.location}>{job.location}</span>
                </div>

                <ul className={styles.bullets}>
                  {job.bullets.map((b, idx)=>(
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {job.tech.map((t,idx)=> <span key={idx} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
