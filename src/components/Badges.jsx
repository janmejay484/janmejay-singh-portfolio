import styles from './styles/Badges.module.css'
import { badges } from '../data/data'

export default function Badges(){
  return (
    <section className="container">
      <div className={styles.wrap + ' card'}>
        {badges.map((b,i)=>(
          <img key={i} className={styles.badge} src={b.url} alt={b.label}/>
        ))}
      </div>
    </section>
  )
}
