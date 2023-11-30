// import { Link } from 'react-scroll'
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
      <Link
        className={styles.popUp}
        href='#main'
        //   to='main'
        //   smooth={true}
        //   offset={-70}
        //   duration={500}
      >
        <ArrowTop />
      </Link>

      <address className={styles.text}>
        79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
      </address>
      <p className={styles.text}>office@ecosolution.com</p>
      <p className={styles.text}>ecosolution &copy; 2023</p>
    </footer>
  )
}

export default Footer
