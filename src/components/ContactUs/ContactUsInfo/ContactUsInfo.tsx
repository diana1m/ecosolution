import Link from 'next/link'
import styles from './ContactUsInfo.module.scss'
import SocialMedia from '@/components/SocialMedia/SocialMedia'
import { CallIcon, MapIcon, SmsIcon } from '@/components/svgs'

const ContactUsInfo = () => {
  return (
    <address className={styles.wrapper}>
      <div className={styles.block}>
        <p className={styles.description}>Phone:</p>
        <Link
          href='tel:380981234567'
          className={`${styles.link} ${styles.phone}`}
        >
          <CallIcon />
          <span>38 (098) 12 34 567</span>
        </Link>
        <Link href='tel:380931234567' className={styles.link}>
          <CallIcon />
          <span>38 (093) 12 34 567</span>
        </Link>
      </div>
      <div className={styles.block}>
        <p className={styles.description}>E-mail:</p>
        <Link href='mailto:office@ecosolution.com' className={styles.link}>
          <SmsIcon />
          <span>office@ecosolution.com</span>
        </Link>
      </div>
      <div className={styles.block}>
        <p className={styles.description}>Address:</p>
        <Link
          href='https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7'
          className={styles.link} target='_blank'
          rel='noopener noreferrer'
        >
          <MapIcon />
          <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
        </Link>
      </div>
      <div className={styles.block}>
        <p className={styles.description}>Social Networks:</p>
        <SocialMedia />
      </div>
    </address>
  )
}

export default ContactUsInfo
