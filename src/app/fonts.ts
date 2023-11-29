import { Fira_Sans, Oswald, MuseoModerno } from 'next/font/google'

export const firaFont = Fira_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--main-font-family',
})
export const oswaldFont = Oswald({
  subsets: ['latin'],
  weight: '400',
  variable: '--secondary-font-family',
})

export const museoFont = MuseoModerno({
  subsets: ['latin'],
  weight: '400',
})
