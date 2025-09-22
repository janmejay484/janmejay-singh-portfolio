import styles from './styles/Footer.module.css'
import { profile } from '../data/data'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className="container">
        <hr className="sep"/>
        <div className={styles.inner}>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className={styles.dot}>•</span>
          <span>Built with React + Vite</span>
        </div>
      </div>
    </footer>
  )
}
