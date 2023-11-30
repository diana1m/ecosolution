'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
// import Link from 'next/link'
import Logo from '../Logo/Logo'
import Burger from './Burger/Burger'
import styles from './Header.module.scss'
import { ArrowTop } from '../svgs'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerClasses = `${styles.header} ${isScrolled ? styles.scrolled : ''}`

  return (
    <header className={headerClasses}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Logo />
          <div className={styles.wrapperBtn}>
            <Burger />
            <Link
              // href='#contact'
              to='contact'
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.getInTouch}
            >
              Get in touch
              <div className={styles.circle}>
                <ArrowTop />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
