'use client'
import { Link as ScrollLink } from 'react-scroll'
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
          <ScrollLink
            className={styles.link}
            to='cases'
            smooth={true}
            offset={-120}
            duration={700}
          >
            Learn more
            <div className={styles.arrowWrapper}>
              <ArrowRight />
            </div>
          </ScrollLink>
        </div>
      </div>

      <div className={styles.contact}>
        <address className={styles.text}>
          <Link href='https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7'>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </Link>
        </address>

        <address className={styles.text}>
          <Link href='mailto:office@ecosolution.com'>
            office@ecosolution.com
          </Link>
        </address>
        <p className={styles.copyright}>ecosolution &copy; 2023</p>
      </div>
      <picture className={styles.picture}>
        <source
          media='(max-width: 767px)'
          srcSet='/Hero/wind-turbine-clean-energy-sm.jpg'
          type='image/jpg'
          height='200px'
          width='100%'
        />
        <source
          media='(min-width: 768px and max-width: 1279px)'
          srcSet='/Hero/wind-turbine-clean-energy-md.jpg'
          type='image/jpg'
          height='348px'
          width='100%'
        />
        <source
          media='(min-width: 1280px)'
          srcSet='/Hero/wind-turbine-clean-energy-lg.jpg'
          type='image/jpg'
          height='524px'
          width='100%'
        />
        <img
          src='/Hero/wind-turbine-clean-energy-lg.jpg'
          alt='wind-turbine'
          width='100%'
          height='auto'
        />
      </picture>
    </section>
  )
}

export default Hero
