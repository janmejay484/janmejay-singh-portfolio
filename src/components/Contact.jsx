import styles from './styles/Contact.module.css'
import { profile } from '../data/data'

export default function Contact(){
  return (
    <section id="contact" className="container">
      <h2 className="sec-title">📬 Connect With Me</h2>
      <p className="sec-sub">Let’s collaborate on something impactful</p>

      <div className={styles.grid}>
        <div className={'card ' + styles.card}>
          <h3>Get in touch</h3>
          <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noreferrer">Profile ↗</a></p>
          <p>GitHub: <a href={profile.github} target="_blank" rel="noreferrer">Profile ↗</a></p>
          <a className="btn" href={`mailto:${profile.email}`}>Say Hello</a>
        </div>

        <form className={'card ' + styles.card} onSubmit={(e)=>e.preventDefault()}>
          <h3>Quick message</h3>
          <div className={styles.field}>
            <label>Name</label>
            <input placeholder="Your name" required/>
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required/>
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea rows="5" placeholder="Tell me about your idea..." required/>
          </div>
          <button className="btn" type="submit">Send (demo)</button>
          <p className={styles.hint}>* This is a demo form. Hook it to a backend or Formspree when ready.</p>
        </form>
      </div>
    </section>
  )
}
