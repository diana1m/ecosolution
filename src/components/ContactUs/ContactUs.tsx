import styles from './ContactUs.module.scss'
import { oswaldFont } from '../../app/fonts'
import ContactUsInfo from './ContactUsInfo/ContactUsInfo'
import ContactUsForm from './ContactUsForm/ContactUsForm'

const ContactUs = () => {
  return (
    <section id='contact' className={styles.section}>
      <h2 className={`${oswaldFont.className} ${styles.title}`}>Contact Us</h2>

      <div className={styles.wrapper}>
        <ContactUsInfo />
        <ContactUsForm />
      </div>
    </section>
  )
}
export default ContactUs
