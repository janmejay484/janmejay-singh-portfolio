import styles from './styles/Contact.module.css'
import { profile } from '../data/data'

export default function Contact(){
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.mark} aria-hidden="true">
            {/* envelope logo */}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z"/>
            </svg>
          </span>
          <div>
            <h2 className="sec-title">📬 Connect With Me</h2>
            <p className="sec-sub">Let’s collaborate on something impactful</p>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Left: contact methods */}
          <div className={`${styles.card} ${styles.info}`}>
            <div className={styles.blob} aria-hidden="true" />
            <h3 className={styles.h3}>Get in touch</h3>

            <a className={styles.row} href={`mailto:${profile.email}`}>
              <span className={`${styles.logo} ${styles.mail}`}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z"/></svg>
              </span>
              <div className={styles.texts}>
                <span className={styles.primary}>Email</span>
                <span className={styles.secondary}>{profile.email}</span>
              </div>
              <span className={styles.chev}>↗</span>
            </a>

            <a className={styles.row} href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className={`${styles.logo} ${styles.in}`}>
                {/* LinkedIn logo */}
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 7.5H3.56V20h3.38V7.5ZM5.25 3.5a2 2 0 1 0 .02 4.02 2 2 0 0 0-.02-4.02Zm6.76 7.07H8.87V20h3.14v-5.37c0-2.86 3.75-3.09 3.75 0V20h3.14v-6.67c0-5.13-5.82-4.94-6.89-2.76v-.01Z"/></svg>
              </span>
              <div className={styles.texts}>
                <span className={styles.primary}>LinkedIn</span>
                <span className={styles.secondary}>Profile</span>
              </div>
              <span className={styles.chev}>↗</span>
            </a>

            <a className={styles.row} href={profile.github} target="_blank" rel="noreferrer">
              <span className={`${styles.logo} ${styles.gh}`}>
                {/* GitHub logo */}
                <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 .2A8 8 0 0 0 5.47 15.8c.4.07.55-.17.55-.38v-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48V15.4c0 .21.15.46.55.38A8 8 0 0 0 8 .2Z"/></svg>
              </span>
              <div className={styles.texts}>
                <span className={styles.primary}>GitHub</span>
                <span className={styles.secondary}>@{(profile.github || '').split('/').pop()}</span>
              </div>
              <span className={styles.chev}>↗</span>
            </a>

            <a className={styles.cta} href={`mailto:${profile.email}`}>Say Hello</a>
          </div>

          {/* Right: animated form (demo) */}
          <form className={`${styles.card} ${styles.form}`} onSubmit={(e)=>{e.preventDefault()}}>
            <h3 className={styles.h3}>Quick message</h3>

            <div className={styles.field}>
              <label>Name</label>
              <div className={styles.inputWrap}>
                <span className={styles.inputIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.67 0-8 2.44-8 5v1h16v-1c0-2.56-3.33-5-8-5Z"/></svg>
                </span>
                <input placeholder="Your name" required/>
              </div>
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <div className={styles.inputWrap}>
                <span className={styles.inputIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm0 5.8-8 5L4 9.8V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z"/></svg>
                </span>
                <input type="email" placeholder="you@example.com" required/>
              </div>
            </div>

            <div className={styles.field}>
              <label>Message</label>
              <div className={styles.inputWrap}>
                <span className={styles.inputIcon} style={{alignSelf:'flex-start', marginTop:'10px'}}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2 4a2 2 0 0 1 2-2h16l-2 6H8l-2 6H2V4Zm6 8h12l-2 6H6l2-6Z"/></svg>
                </span>
                <textarea rows="5" placeholder="Tell me about your idea..." required/>
              </div>
            </div>

            <button className={styles.btn} type="submit">
              <span>Send (message)</span>
              <i className={styles.ripple} aria-hidden="true" />
            </button>
            {/* <p className={styles.hint}>* This is a demo form. Hook it to a backend or Formspree when ready.</p> */}
          </form>
        </div>
      </div>
    </section>
  )
}
