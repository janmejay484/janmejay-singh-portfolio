import styles from './styles/ActivityGraph.module.css'
import { stats } from '../data/data'

export default function ActivityGraph(){
  return (
    <section className="container">
      <h2 className="sec-title">📈 GitHub Activity Graph</h2>
      <img
        className={styles.graph + ' card'}
        src={`https://github-readme-activity-graph.vercel.app/graph?username=${stats.user}&theme=react-dark`}
        alt="activity graph"
      />
    </section>
  )
}
