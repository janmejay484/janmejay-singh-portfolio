import styles from './styles/Footer.module.css'
import { profile } from '../data/data'

export default function Footer(){
  const year = new Date().getFullYear()

  // Add these optional fields in data.js:
  // profile.github, profile.linkedin, profile.email, profile.leetcode, profile.gfg, profile.hackerrank

  const links = [
    { key: 'github', href: profile.github, label: 'GitHub', icon: GitHubIcon },
    { key: 'linkedin', href: profile.linkedin, label: 'LinkedIn', icon: LinkedInIcon },
    { key: 'mail', href: profile.email ? `mailto:${profile.email}` : undefined, label: 'Email', icon: MailIcon },
    { key: 'leetcode', href: profile.leetcode, label: 'LeetCode', icon: LeetCodeIcon },
    { key: 'gfg', href: profile.gfg, label: 'GeeksforGeeks', icon: GFGIcon },
    { key: 'hackerrank', href: profile.hackerrank, label: 'HackerRank', icon: HackerRankIcon },
  ].filter(x => !!x.href)

  return (
    <footer className={styles.footer}>
      <div className="container">
        <hr className="sep" />

        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.spark} aria-hidden="true" />
            <span className={styles.copy}>© {year} {profile.name}</span>
          </div>

          <nav className={styles.social} aria-label="Social links">
            {links.map(({ key, href, label, icon:Icon }) => (
              <a key={key} href={href} target={href.startsWith('mailto:') ? '_self' : '_blank'} rel="noreferrer"
                 className={styles.iconLink} aria-label={label} title={label}>
                <Icon className={styles.icon} />
                <span className={styles.tooltip}>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

/* ----------------- Icons (inline SVG) ----------------- */

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

function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm0 5.8-8 5L4 9.8V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z"/>
    </svg>
  )
}

function LeetCodeIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 8 9 20l12 12" />
      <path d="M39 8 27 20l12 12" />
      <path d="M27 20h-6" />
    </svg>
  )
}

function GFGIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden="true">
      <path d="M32 10a14 14 0 1 0 0 28v-6a8 8 0 1 1 0-16v-6z"/>
      <path d="M32 26a14 14 0 1 1 0 28v-6a8 8 0 1 0 0-16v-6z"/>
    </svg>
  )
}

function HackerRankIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden="true">
      <path d="M32 4 8 16v32l24 12 24-12V16L32 4zm-6 17h12v6h-6v6h6v6H26V21z"/>
    </svg>
  )
}
