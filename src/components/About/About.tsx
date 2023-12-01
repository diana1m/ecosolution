import styles from './About.module.scss'
import { oswaldFont } from '../../app/fonts'

const About = () => {
  return (
    <section id='about' className={styles.section}>
      <h2 className={`${oswaldFont.className} ${styles.title}`}>About</h2>
    </section>
  )
}
export default About
