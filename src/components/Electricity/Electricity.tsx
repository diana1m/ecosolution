import styles from './Electricity.module.scss'
import { oswaldFont } from '../../app/fonts'

const Electricity = () => {
  return (
    <section
      id='electricity'
      className={`${oswaldFont.className} ${styles.section}`}
    >
      <h2 className={styles.title}>Electricity we produced for all time</h2>
      <div className={styles.numberWrapper}>
        <span className={styles.number}>1.134.147.814</span>
        <span className={styles.text}>kWh</span>
      </div>
    </section>
  )
}
export default Electricity
