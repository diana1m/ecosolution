'use client'
import React, { useState, useEffect } from 'react'
import Logo from '../Logo/Logo'
import Burger from './Burger/Burger'
import styles from './Header.module.scss'
import FilledButton from '../FilledButton/FilledButton'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
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
            <FilledButton text='Get in touch' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
