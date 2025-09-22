import styles from './styles/Hero.module.css'
import { profile } from '../data/data'
import myPhoto from '../assets/janmejay.jpeg'
export default function Hero(){
  const photoSrc = profile.photo || myPhoto|| profile.avatar; // set profile.photo in data.js to your image URL

  return (
    <section className={styles.hero}>
      <div className="container">

        {/* Keep your waving banner */}
        <div className={styles.bannerWrap}>
          <img className={styles.banner} src={profile.heroBanner} alt="Banner"/>
        </div>

        {/* New split layout: text left, photo right */}
        <div className={styles.wrap}>
          <div className={styles.left}>
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

          <div className={styles.right}>
            <div className={styles.photoCard} aria-label={`${profile.name} portrait`}>
              <div className={styles.glow} />
              <div className={styles.ring} />
              <img className={styles.photo} src={photoSrc} alt={profile.name} />
              <div className={styles.badgeFloat}>
                <span className={styles.badgeChip}>Full-Stack • MERN</span>
                <span className={styles.badgeChip}>AI/ML Explorer</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
