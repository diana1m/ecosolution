'use client'
import { useState, useEffect } from 'react'
import styles from './Electricity.module.scss'
import { oswaldFont } from '../../app/fonts'

const Electricity: React.FC = () => {
  const [electricityProduced, setElectricityProduced] =
    useState<number>(1134147814)

  useEffect(() => {
    const initialElectricityProduced = parseInt(
      localStorage.getItem('electricityProduced') || '1134147814',
      10
    )
    setElectricityProduced(initialElectricityProduced)

    const intervalId = setInterval(() => {
      setElectricityProduced((prevCount) => {
        const newCount = prevCount + 1
        localStorage.setItem('electricityProduced', newCount.toString())
        return newCount
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formatNumber = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <section
      id='electricity'
      className={`${oswaldFont.className} ${styles.section}`}
    >
      <h2 className={styles.title}>Electricity we produced for all time</h2>
      <div className={styles.numberWrapper}>
        <span className={styles.number} key={electricityProduced}>
          {formatNumber(electricityProduced)}
        </span>
        <span className={styles.text}>kWh</span>
      </div>
    </section>
  )
}

export default Electricity
