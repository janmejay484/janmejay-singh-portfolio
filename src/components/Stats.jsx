import { useState } from 'react'
import styles from './styles/Stats.module.css'
import { stats } from '../data/data'

const TABS = [
  {
    key: 'overview',
    label: 'Overview',
    src: (u,t) => `https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=${t}&hide_border=true&bg_color=0d1117&title_color=FFA3B1&icon_color=79dafa`
  },
  {
    key: 'languages',
    label: 'Languages',
    src: (u,t) => `https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=${t}&hide_border=true&bg_color=0d1117&title_color=FFA3B1`
  },
  {
    key: 'streak',
    label: 'Streak',
    src: (u) => `https://streak-stats.demolab.com?user=${u}&hide_border=true&background=0d1117&ring=ff7aa2&fire=ff4b6e&currStreakNum=ffffff&sideLabels=ffffff`
  }
]

// ...imports stay the same

export default function Stats(){
  const [active, setActive] = useState('overview')
  const tab = TABS.find(t => t.key === active)
  const imageSrc = tab.src(stats.user, stats.theme)

  return (
    <section className={`${styles.section}`}>
      <div className="container">

        <div className={styles.header}>
          <div className={styles.titleWrap}>
            <span className={styles.ghMark} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            </span>
            <h2 className={styles.title}>GitHub Dashboard</h2>
          </div>

          <div className={styles.tabs}>
            {TABS.map(t => (
              <button
                key={t.key}
                className={`${styles.tab} ${active===t.key ? styles.active : ''}`}
                onClick={()=>setActive(t.key)}
                type="button"
              >
                {t.label}
              </button>
            ))}
            <span
              className={styles.inkbar}
              style={{ transform: `translateX(${TABS.findIndex(t=>t.key===active) * 100}%)` }}
            />
          </div>

          {/* NEW: chips live under tabs, not on top of the image */}
          {/* <div className={styles.chipsRow}>
            <span className={styles.chip}>Open-Source</span>
            <span className={styles.chip}>Learning Daily</span>
          </div> */}
        </div>

        {/* Clean card — no chips inside */}
        <div className={styles.panel}>
          <div className={styles.border} />
          <div className={styles.blurBlob} />
          <img className={styles.img} alt={`github ${active}`} src={imageSrc} loading="lazy" />
        </div>

        <div className={styles.rail}>
          {TABS.map(t => (
            <button
              key={t.key}
              className={`${styles.railItem} ${active===t.key ? styles.railActive : ''}`}
              onClick={()=>setActive(t.key)}
              type="button"
              aria-label={`Show ${t.label}`}
            >
              <img alt={t.label} src={t.src(stats.user, stats.theme)} />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
