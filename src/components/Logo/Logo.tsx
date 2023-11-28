import Image from 'next/image'
import styles from './Logo.module.scss'
import Link from 'next/link'
import { MuseoModerno } from 'next/font/google'

const text = MuseoModerno({
  subsets: ['latin'],
  weight: '400',
})

const Logo = () => {
  return (
    <Link className={styles.wrapper} href='#'>
      <Image src='/Logo/logo.svg' alt='logo' width={32} height={18} />
      <p className={styles.name}>ecosolution</p>
      <div className={styles.slogan}>
        <span>GREEN</span>ERGY FOR LIFE
      </div>
    </Link>
  )
}
export default Logo
