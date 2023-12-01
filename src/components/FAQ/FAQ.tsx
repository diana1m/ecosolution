import styles from './FAQ.module.scss'
import { oswaldFont } from '../../app/fonts'

const FAQ = () => {
  return (
    <section id='faq' className={styles.section}>
      <h2 className={`${oswaldFont.className} ${styles.title}`}>FAQ</h2>
    </section>
  )
}
export default FAQ
