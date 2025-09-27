import styles from './styles/Hero.module.css'
import { profile } from '../data/data'
import myPhoto from '../assets/janmejay.jpeg'

export default function Hero(){
  const photoSrc = profile.photo || myPhoto || profile.avatar
  const [first, ...rest] = (profile.name || 'Janmejay Singh').split(' ')
  const last = rest.join(' ')
  const resumeHref = profile.resume || '/resume.pdf' // fallback path

  return (
    <section className={styles.hero}>
      <div className="container">
       {/* NEW: Minimal name lockup (no banner) */} 
       <div className={styles.nameLockup}> <span className={styles.hello}>hey there 👋</span> 
       <h1 className={styles.nameLine} aria-label={`I'm ${profile.name}`}> 
       <span className={styles.first}>{first}</span> {last && <span className={styles.last}> {last}</span>}
        <span className={styles.shine} aria-hidden="true" />
         </h1>
        <div className={styles.underline} aria-hidden="true"> 
       <span className={styles.underlineFill} /> 
       </div> 
       {/* <div className={styles.metaChips}> 
       <span className={styles.meta}>Full-Stack Developer</span> 
       <span className={styles.dot}>•</span> 
       <span className={styles.meta}>MERN & AI/ML</span> </div> */}
        </div>

        <div className={styles.wrap}>
          <div className={styles.left}>
            <h2 className={styles.title}>{profile.title}</h2>
            <p className={styles.sub}>{profile.tagline}</p>

            <div className={styles.typingWrap}>
              <img src={profile.typing1} alt="typing" />
            </div>

            {/* ⬇️ NEW: premium action buttons */}
            <div className={styles.actions}>
              {/* primary CTA: resume download */}
              <a
                className={styles.ctaPrimary}
                href={resumeHref}
                download
                aria-label="Download Résumé"
              >
                <DownloadIcon className={styles.icon} />
                <span>Download Résumé</span>
                <i className={styles.btnShine} aria-hidden="true" />
              </a>

              {/* secondary: GitHub */}
              <a
                className={`${styles.pill} ${styles.gh}`}
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <GitHubIcon className={styles.icon}/>
                <span>GitHub</span>
              </a>

              {/* secondary: LinkedIn */}
              <a
                className={`${styles.pill} ${styles.in}`}
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <LinkedInIcon className={styles.icon}/>
                <span>LinkedIn</span>
              </a>

              {/* keep this if you still want an internal jump */}
              <a className={styles.ghost} href="#projects">View Projects</a>
            </div>
          </div>

          {/* right photo card … (unchanged) */}
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

/* ---------- Inline icons (no deps) ---------- */
function DownloadIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42L11 12.59V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"/>
    </svg>
  )
}
function GitHubIcon({ className }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 0a8 8 0 0 0-2.53 15.6c.4.07.55-.18.55-.4v-1.47c-2.02.37-2.53-.5-2.69-.96-.1-.24-.48-.96-.82-1.16-.28-.15-.68-.53 0-.54.63-.01 1.08.58 1.23.83.73 1.22 1.88.88 2.34.67.07-.53.28-.88.51-1.09-1.78-.2-3.65-.9-3.65-3.98 0-.88.31-1.6.83-2.17-.08-.21-.36-1.03.08-2.14 0 0 .67-.21 2.2.83.64-.19 1.32-.28 2-.28.68 0 1.36.1 2 .28 1.52-1.04 2.2-.83 2.2-.83.44 1.11.16 1.93.08 2.14.52.57.83 1.29.83 2.17 0 3.1-1.88 3.78-3.66 3.98.29.25.54.73.54 1.49v2.2c0 .22.15.47.55.39A8 8 0 0 0 8 0z"/>
    </svg>
  )
}
function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.94 7.5H3.56V20h3.38V7.5ZM5.25 3.5a2 2 0 1 0 .02 4.02 2 2 0 0 0-.02-4.02Zm6.76 7.07H8.87V20h3.14v-5.37c0-2.86 3.75-3.09 3.75 0V20h3.14v-6.67c0-5.13-5.82-4.94-6.89-2.76Z"/>
    </svg>
  )
}
