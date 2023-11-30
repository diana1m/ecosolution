// import { Link } from 'react-scroll
import Link from 'next/link'
import Logo from '../Logo/Logo'
import Burger from './Burger/Burger'
import styles from './Header.module.scss'
import { ArrowTop } from '../svgs'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.wrapper}>
        <Burger />
        <Link
          href='#contact'
          // to='contact'
          // smooth={true}
          // offset={-70}
          // duration={500}
          className={styles.getInTouch}
        >
          Get in touch
          <div className={styles.circle}>
            <ArrowTop />
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
