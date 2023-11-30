'use client'
import { useState } from 'react'
import { MenuIcon } from '@/components/svgs'
import styles from './Burger.module.scss'
import Menu from '../Menu/Menu'

const Burger = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <button
        type='button'
        className={styles.burgerBtn}
        onClick={handleMenuToggle}
      >
        <MenuIcon />
      </button>
      <Menu onClose={closeMenu} isOpen={isMenuOpen} />
    </>
  )
}

export default Burger
