import styles from './styles/About.module.css'
import { about, profile } from '../data/data'

export default function About(){
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>👋 About Me</h2>
          <p className={styles.sub}>A quick snapshot of who I am</p>
        </div>

        <div className={styles.grid}>
          {/* left: portrait + chips */}
          <div className={`${styles.card} ${styles.portraitCard}`}>
            <div className={styles.ring} />
            <img className={styles.photo} src={profile.photo || profile.avatar} alt={profile.name} />
            <div className={styles.chips}>
              <span>Full-Stack</span>
              <span>MERN</span>
              <span>TypeScript</span>
              <span>AI/ML Explorer</span>
            </div>
          </div>

          {/* right: blurb + highlights */}
          <div className={`${styles.card} ${styles.textCard}`}>
            <p className={styles.blurb}>{about.blurb}</p>
            <ul className={styles.list}>
              {about.highlights.map((h,i)=>(
                <li key={i} style={{'--d': `${i*80}ms`}}>
                  <span className={styles.tick}>✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <a className={styles.btn} href="#projects">See Projects</a>
              <a className={styles.ghost} href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
