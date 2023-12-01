import About from '@/components/About/About'
import Cases from '@/components/Cases/Cases'
import ContactUs from '@/components/ContactUs/ContactUs'
import Electricity from '@/components/Electricity/Electricity'
import FAQ from '@/components/FAQ/FAQ'
import Hero from '@/components/Hero/Hero'

export default function Home() {
  return (
    <main className='main'>
      <Hero />
      <About />
      <Electricity />
      <Cases />
      <FAQ />
      <ContactUs />
    </main>
  )
}
