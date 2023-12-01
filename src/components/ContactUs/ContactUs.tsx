import styles from './ContactUs.module.scss'
import { oswaldFont } from '../../app/fonts'

const ContactUs = () => {
  return (
    <section id='contact' className={styles.section}>
      <h2 className={`${oswaldFont.className} ${styles.title}`}>Contact Us</h2>
    </section>
  )
}
export default ContactUs
