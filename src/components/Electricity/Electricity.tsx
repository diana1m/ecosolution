import styles from './Electricity.module.scss'
import { oswaldFont } from '../../app/fonts'

const Electricity = () => {
  return (
    <section id='electricity' className={styles.section}>
      <h2 className={`${oswaldFont.className} ${styles.title}`}>Electricity</h2>
    </section>
  )
}
export default Electricity
