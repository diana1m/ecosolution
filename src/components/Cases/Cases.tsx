'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.css'
import { Navigation, Pagination } from 'swiper/modules'

import { data } from './data'
import styles from './Cases.module.scss'
import { oswaldFont } from '../../app/fonts'
import { ArrowRight, ArrowRightTop } from '../svgs'

const Cases = () => {
  const paginationFormat = (currentIndex: number, totalSlides: number) => {
    return `<span style="color: #173d33">${(currentIndex + 1)
      .toString()
      .padStart(2, '0')}</span> /${totalSlides.toString().padStart(2, '0')}`
  }

  return (
    <section id='cases' className={styles.section}>
      <div className='container'>
        <div className={styles.headWrapper}>
          <h2 className={`${oswaldFont.className}   ${styles.title}`}>
            Successful cases of our company
          </h2>
          <div className={styles.paginationWrapper}>
            <div className='swiper-pagination'></div>
            <div className={styles.buttonWrapper}>
              <div className={`swiper-button-prev ${styles.customPrevButton}`}>
                <ArrowRight />
              </div>
              <div className={`swiper-button-next ${styles.customNextButton}`}>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>

        <Swiper
          className={styles.slider}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop
          modules={[Navigation, Pagination]}
          pagination={{
            el: '.swiper-pagination',
            clickable: false,
            renderBullet: (index, className) => {
              return `<span class="${className}">${paginationFormat(
                index,
                data.length
              )}</span>`
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <Image
                  src={item.img}
                  alt={item.title}
                  className={styles.cardImage}
                  width={320}
                  height={168}
                />
                <div className={styles.cardContent}>
                  <div className={styles.cardHead}>
                    <p className={styles.cardTitle}>{item.title}</p>
                    <Link href={item.href} className={styles.cardBtn}>
                      <ArrowRightTop />
                    </Link>
                  </div>
                  <div className={styles.cardBottom}>
                    <p>{item.description}</p>
                    <p>{item.data}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default Cases
