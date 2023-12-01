import Image from 'next/image'
import styles from './About.module.scss'
import { oswaldFont } from '../../app/fonts'
import { AboutIcon1, AboutIcon2, AboutIcon3, AboutIcon4 } from '../svgs'

const About = () => {
  return (
    <section id='about' className={styles.section}>
      <div className={styles.contentWrapper}>
        <h2 className={`${oswaldFont.className} ${styles.title}`}>
          Main values of our company
        </h2>
        <p>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardTitleWrapper}>
            <AboutIcon1 />
            <h3 className={oswaldFont.className}>Openness</h3>
          </div>
          <p>to the world, people, new ideas and projects</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitleWrapper}>
            <AboutIcon2 />
            <h3 className={oswaldFont.className}>Responsibility</h3>
          </div>
          <p>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </div>
        <Image
          src='/About/image1.jpg'
          alt='wind farms and two men worker'
          className={styles.cardImage1}
          width={346}
          height={197}
        />
        <Image
          src='/About/image2.jpg'
          alt='man worker in a field of solar panels'
          className={styles.cardImage2}
          width={346}
          height={197}
        />
        <div className={styles.card}>
          <div className={styles.cardTitleWrapper}>
            <AboutIcon3 />
            <h3 className={oswaldFont.className}>Innovation</h3>
          </div>
          <p>
            we use the latest technology to implement non-standard solutions
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitleWrapper}>
            <AboutIcon4 />
            <h3 className={oswaldFont.className}>Quality</h3>
          </div>
          <p>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </div>
      </div>
    </section>
  )
}
export default About
