'use client'
import { FC } from 'react'
import { Link } from 'react-scroll'
import styles from './FilledButton.module.scss'
import { ArrowTop } from '../svgs'

interface PropsButton {
  text: string
}

const FilledButton: FC<PropsButton> = ({ text }) => {
  const classButton = `${styles.button} ${
    text === 'Get in touch' ? styles.getInTouch : ''
  }`

  return (
    <Link
      to='contact'
      smooth={true}
      offset={-120}
      duration={700}
      className={classButton}
    >
      {text}
      <div className={styles.circle}>
        <ArrowTop />
      </div>
    </Link>
  )
}
export default FilledButton
