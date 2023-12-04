'use client'
import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import styles from './ContactUsForm.module.scss'
import { ArrowRight } from '@/components/svgs'

interface ContactFormData {
  fullName: string
  email: string
  phoneNumber: string
  message: string
}

const ContactUsForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor='fullName'>
          * Full Name:
        </label>
        <Controller
          name='fullName'
          control={control}
          defaultValue=''
          rules={{
            required: 'This field is required',
            pattern: { value: /^[A-Za-z]+$/, message: 'Wrong Fullname' },
          }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                type='text'
                placeholder='John Rosie'
                className={`${styles.formInput} ${
                  errors.fullName ? styles.inputError : ''
                }`}
              />
              {errors.fullName && (
                <p className={styles.formError}>{errors.fullName.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor='email'>
          * E-mail:
        </label>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          rules={{
            required: 'This field is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Wrong Email',
            },
          }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                type='email'
                placeholder='johnrosie@gmail.com'
                className={`${styles.formInput} ${
                  errors.email ? styles.inputError : ''
                }`}
              />
              {errors.email && (
                <p className={styles.formError}>{errors.email.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor='phoneNumber'>
          * Phone:
        </label>
        <Controller
          name='phoneNumber'
          control={control}
          defaultValue=''
          rules={{
            required: 'This field is required',
            pattern: {
              value: /^(?:\+?38)?0\d{9}$/,
              message: 'Wrong Phone',
            },
          }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                type='tel'
                placeholder='380961234567'
                className={`${styles.formInput} ${
                  errors.phoneNumber ? styles.inputError : ''
                }`}
              />
              {errors.phoneNumber && (
                <p className={styles.formError}>{errors.phoneNumber.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor='message'>
          Message:
        </label>
        <Controller
          name='message'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <div>
              <textarea
                {...field}
                placeholder='Your message'
                className={styles.formTextarea}
              />
            </div>
          )}
        />
      </div>

      <button type='submit' className={styles.formButton}>
        Send
        <div className={styles.arrowWrapper}>
          <ArrowRight />
        </div>
      </button>
    </form>
  )
}

export default ContactUsForm
