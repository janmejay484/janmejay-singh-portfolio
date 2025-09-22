import styles from './styles/Header.module.css'
import { profile } from '../data/data'

export default function Header(){
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <div className={styles.avatar}>
              <img src={profile.avatar} alt={profile.name}/>
            </div>
            <div>
              <div className={styles.name}>{profile.name}</div>
              <div className={styles.role}>Full-Stack Developer</div>
            </div>
          </div>
          <nav className={styles.nav}>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className={styles.cta}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
