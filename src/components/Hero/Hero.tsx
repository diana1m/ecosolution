// import { Link } from 'react-scroll'
import Link from 'next/link'
import { oswaldFont } from '../../app/fonts'
import styles from './Hero.module.scss'
import { ArrowRight } from '../svgs'

const Hero = () => {
  return (
    <section id='main' className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={`${oswaldFont.className} ${styles.title}`}>
          RENEWABLE ENERGY For any task
        </h1>
        <div className={styles.descriptionWrapper}>
          <p>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <Link
            className={styles.link}
            href='#cases'
            //   to='cases'
            //   smooth={true}
            //   offset={-70}
            //   duration={500}
          >
            Learn more
            <div className={styles.arrowWrapper}>
              <ArrowRight />
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.contact}>
        <address className={styles.text}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </address>
        <Link className={styles.text} href='mailto:office@ecosolution.com'>
          office@ecosolution.com
        </Link>
        <p className={styles.copyright}>ecosolution &copy; 2023</p>
      </div>
    </section>
  )
}

export default Hero
