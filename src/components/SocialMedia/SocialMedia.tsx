import Link from 'next/link'
import { FacebookIcon, InstagramIcon } from '../svgs'
import styles from './SocialMedia.module.scss'

const SocialMedia = () => {
  return (
    <div className={styles.wrapper}>
      <Link
        href='https://www.facebook.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FacebookIcon className={styles.icon} />
      </Link>
      <Link
        href='https://www.instagram.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <InstagramIcon className={styles.icon} />
      </Link>
    </div>
  )
}

export default SocialMedia
