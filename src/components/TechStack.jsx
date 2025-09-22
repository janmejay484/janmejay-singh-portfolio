import styles from './styles/TechStack.module.css'
import { techIcons } from '../data/data'

// Map your data keys -> Simple Icons slug + brand color (hex without #)
const ICON_CDN = 'https://cdn.simpleicons.org'
const MAP = {
  react:      { slug: 'react',        color: '61DAFB' },
  nextjs:     { slug: 'nextdotjs',    color: 'FFFFFF' },
  nodejs:     { slug: 'nodedotjs',    color: '83CD29' },
  express:    { slug: 'express',      color: 'FFFFFF' },
  mongodb:    { slug: 'mongodb',      color: '47A248' },
  html:       { slug: 'html5',        color: 'E34F26' },
  css:        { slug: 'css3',         color: '1572B6' },
  tailwind:   { slug: 'tailwindcss',  color: '06B6D4' },
  vite:       { slug: 'vite',         color: '646CFF' },
  git:        { slug: 'git',          color: 'F05032' },
  github:     { slug: 'github',       color: 'FFFFFF' },
  figma:      { slug: 'figma',        color: 'F24E1E' },
  postman:    { slug: 'postman',      color: 'FF6C37' },
  java:       { slug: 'oracle',       color: 'ED8B00' },   // Java brand via Oracle
  ts:         { slug: 'typescript',   color: '3178C6' },
  typescript: { slug: 'typescript',   color: '3178C6' },
  js:         { slug: 'javascript',   color: 'F7DF1E' },
  javascript: { slug: 'javascript',   color: 'F7DF1E' },
  mysql:      { slug: 'mysql',        color: '4479A1' }
}

export default function TechStack(){
  const items = techIcons
    .map(k => ({ key: k, ...MAP[k] }))
    .filter(x => x.slug)

  return (
    <section className="container">
      <h2 className="sec-title">🛠 Tech Stack</h2>
      <p className="sec-sub">Tools I use day-to-day</p>

      <div className={`${styles.grid} card`}>
        {items.map(({ key, slug, color }) => (
          <div key={key} className={styles.tile} title={key.toUpperCase()} aria-label={key.toUpperCase()}>
            <div className={styles.ring}/>
            <div className={styles.glow}/>
            <img
              className={styles.icon}
              alt={key}
              loading="lazy"
              src={`${ICON_CDN}/${slug}/${color}`}
              onError={(e)=>{ e.currentTarget.src = `${ICON_CDN}/${slug}` }} /* fallback to monochrome */
            />
            <span className={styles.label}>{key.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
