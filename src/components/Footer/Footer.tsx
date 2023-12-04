'use client'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import styles from './Footer.module.scss'
import { ArrowTop } from '@/components/svgs'
import Logo from '../Logo/Logo'
import SocialMedia from '../SocialMedia/SocialMedia'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.gridItem}>
        <Logo />
      </div>
      <div className={styles.gridItem}>
        <SocialMedia />
      </div>
      <ScrollLink
        className={styles.popUp}
        to='main'
        smooth={true}
        offset={-120}
        duration={800}
      >
        <ArrowTop />
      </ScrollLink>

      <address className={styles.text}>
        <Link
          href='https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7'
          target='_blank'
          rel='noopener noreferrer'
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Link>
      </address>
      <address className={styles.text}>
        <Link href='mailto:office@ecosolution.com'>office@ecosolution.com</Link>
      </address>
      <p className={styles.text}>ecosolution &copy; 2023</p>
    </footer>
  )
}

export default Footer
