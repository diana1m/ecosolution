import { FC } from 'react'
import styles from './Accordion.module.scss'
import { AddIcon, MinusIcon } from '@/components/svgs'

interface AccordionProps {
  id: string
  isOpen: boolean
  onToggle: (id: string) => void
  title: string
  children: React.ReactNode
}

const Accordion: FC<AccordionProps> = ({
  title,
  children,
  onToggle,
  id,
  isOpen,
}) => {
  const toggleAccordion = () => {
    onToggle(id)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper} onClick={toggleAccordion}>
        <div className={styles.icon}>
          {isOpen ? <MinusIcon /> : <AddIcon />}
        </div>

        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className={`${styles.description} ${isOpen ? styles.open : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Accordion
