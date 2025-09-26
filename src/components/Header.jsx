import { useEffect, useState } from "react";
import styles from "./styles/Header.module.css";
import { profile } from "../data/data";

export default function Header(){
  const [open, setOpen] = useState(false);
  const avatarSrc = profile.logo || profile.avatar;

  // close on route hash change / ESC
  useEffect(()=>{
    const onHash = ()=> setOpen(false);
    const onEsc = (e)=> e.key === "Escape" && setOpen(false);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("keydown", onEsc);
    return ()=>{ window.removeEventListener("hashchange", onHash); window.removeEventListener("keydown", onEsc); }
  },[]);

  // prevent body scroll when menu open
  useEffect(()=>{
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
      <header className={styles.header} role="banner">
      <div className="container">
        <div className={styles.inner}>
          <a className={styles.brand} href="#top" aria-label={`${profile.name} home`}>
            <div className={styles.avatar}>
              <img
                src={avatarSrc}
                alt={profile.name}
                width={38}
                height={38}
                decoding="async"
                loading="eager"
              />
            </div>
            <div className={styles.brandText}>
              <div className={styles.name}>{profile.name}</div>
              <div className={styles.role}>{profile.role || 'Full-Stack Developer'}</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Primary">
            <a href="#skills" className={styles.link}>Skills</a>
            <a href="#projects" className={styles.link}>Projects</a>
            {/* <a href="#about" className={styles.link}>About</a> */}
            <a href="#experience" className={styles.link}>Experience</a>
            <a href="#contact" className={`${styles.link} ${styles.cta}`}>Contact</a>

          </nav>

          {/* Mobile hamburger */}
          <button
            className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={()=>setOpen(v=>!v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu (overlay + panel) */}
      <div
        id="mobile-menu"
        className={`${styles.mobileWrap} ${open ? styles.show : ""}`}
        onClick={()=>setOpen(false)}
      >
        <nav className={styles.mobilePanel} onClick={(e)=>e.stopPropagation()}>
          <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>
          <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
          {/* <a href="#about" className={styles.link}>About</a> */}
          <a href="#experience" className={styles.link}>Experience</a>
          <a href="#contact" className={styles.mobileCta} onClick={()=>setOpen(false)}>Contact</a>

        </nav>
      </div>
    </header>
  );
}
