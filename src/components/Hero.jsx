import styles from './styles/Hero.module.css'
import { profile } from '../data/data'

export default function Hero(){
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.bannerWrap}>
          <img className={styles.banner} src={profile.heroBanner} alt="Banner"/>
        </div>

        <h1 className={styles.title}>{profile.title}</h1>
        <p className={styles.sub}>{profile.tagline}</p>

        <div className={styles.typingWrap}>
          <img src={profile.typing1} alt="typing" />
        </div>

        <div className={styles.actions}>
          <a className="btn" href="#projects">View Projects</a>
          <a className="badge" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="badge" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  )
}
