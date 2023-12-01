import { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import styles from './Menu.module.scss'
import { data } from './data'
import SocialMedia from '@/components/SocialMedia/SocialMedia'
import { ArrowRightTop, CloseIcon } from '@/components/svgs'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const Menu: FC<MenuProps> = ({ onClose, isOpen }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      onClick={handleOverlayClick}
    >
      <div className='container' onClick={handleOverlayClick}>
        <div className={styles.wrapper}>
          <button type='button' onClick={onClose} className={styles.closeBtn}>
            <CloseIcon /> close
          </button>
          <nav className={styles.navigation}>
            {data.map((item) => (
              <ScrollLink
                to={item.href}
                smooth={true}
                offset={-100}
                duration={600}
                onClick={onClose}
                className={styles.navLink}
              >
                {item.text}
                <ArrowRightTop />
              </ScrollLink>
            ))}
          </nav>

          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default Menu
