import styles from './Cases.module.scss'
import { oswaldFont } from '../../app/fonts'

const Cases = () => {
  return (
    <section id='cases' className={styles.section}>
      <h2 className={`${oswaldFont.className} ${styles.title}`}>Cases</h2>
    </section>
  )
}
export default Cases
