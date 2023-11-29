import Image from 'next/image'
import styles from './Logo.module.scss'
import Link from 'next/link'
import { museoFont } from '@/app/fonts'

const Logo = () => {
  return (
    <Link className={styles.wrapper} href='#'>
      <Image src='/Logo/logo.svg' alt='logo' width={32} height={18} />
      <p className={`${museoFont.className} ${styles.name}`}>ecosolution</p>
      <div className={styles.slogan}>
        <span>Green</span>ergy for life
      </div>
    </Link>
  )
}
export default Logo
