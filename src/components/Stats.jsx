import styles from './styles/Stats.module.css'
import { stats } from '../data/data'

export default function Stats(){
  return (
    <section className="container">
      <h2 className="sec-title">📊 GitHub Stats</h2>
      <div className={styles.row}>
        <img className="card" height="180" alt="stats"
             src={`https://github-readme-stats.vercel.app/api?username=${stats.user}&show_icons=true&theme=${stats.theme}`} />
        <img className="card" height="180" alt="top langs"
             src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${stats.user}&layout=compact&theme=${stats.theme}`} />
      </div>
    </section>
  )
}
