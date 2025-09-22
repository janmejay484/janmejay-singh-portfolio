import styles from './styles/Hero.module.css'
import { profile } from '../data/data'
import myPhoto from '../assets/janmejay.jpeg'

export default function Hero(){
  const photoSrc = profile.photo || myPhoto || profile.avatar
  const [first, ...rest] = (profile.name || 'Janmejay Singh').split(' ')
  const last = rest.join(' ')

  return (
    <section className={styles.hero}>
      <div className="container">

        {/* NEW: Minimal name lockup (no banner) */}
        <div className={styles.nameLockup}>
          <span className={styles.hello}>hey there 👋</span>

          <h1 className={styles.nameLine} aria-label={`I'm ${profile.name}`}>
            <span className={styles.first}>{first}</span>
            {last && <span className={styles.last}> {last}</span>}
            <span className={styles.shine} aria-hidden="true" />
          </h1>

          <div className={styles.underline} aria-hidden="true">
            <span className={styles.underlineFill} />
          </div>

          <div className={styles.metaChips}>
            <span className={styles.meta}>Full-Stack Developer</span>
            <span className={styles.dot}>•</span>
            <span className={styles.meta}>MERN & AI/ML</span>
          </div>
        </div>

        {/* Split layout: text + photo (kept) */}
        <div className={styles.wrap}>
          <div className={styles.left}>
            <h2 className={styles.title}>{profile.title}</h2>
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
