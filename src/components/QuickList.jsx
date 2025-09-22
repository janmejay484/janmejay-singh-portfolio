import styles from './styles/QuickList.module.css'
import { quickList } from '../data/data'

export default function QuickList(){
  return (
    <section className="container">
      <details className={'card ' + styles.details}>
        <summary><b>Quick list view</b> — tap to expand</summary>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Project</th><th>Description</th><th>Tech Stack</th><th>Link</th>
              </tr>
            </thead>
            <tbody>
              {quickList.map(([name,desc,stack,link])=>(
                <tr key={name}>
                  <td><b>{name}</b></td>
                  <td>{desc}</td>
                  <td><code>{stack}</code></td>
                  <td><a href={link} target="_blank" rel="noreferrer">GitHub ↗</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </section>
  )
}
