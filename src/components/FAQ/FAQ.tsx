'use client'
import styles from './FAQ.module.scss'
import { oswaldFont } from '../../app/fonts'
import Accordion from './Accordion/Accordion'
import { useState } from 'react'
import FilledButton from '../FilledButton/FilledButton'

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('Section1')

  const handleAccordionToggle = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }

  return (
    <section id='faq' className={styles.section}>
      <h2 className={`${oswaldFont.className} ${styles.title}`}>
        Frequently Asked Questions
      </h2>
      
      <div className={styles.accordionWrapper}>
        <Accordion
          id='Section1'
          isOpen={openAccordion === 'Section1'}
          onToggle={handleAccordionToggle}
          title='How do wind turbines and solar panels work together in a renewable energy system?'
        >
          Wind turbines and solar panels generate electricity through different
          mechanisms. Wind turbines harness the kinetic energy of the wind to
          turn blades, which then drive a generator. Solar panels convert
          sunlight into electricity through the photovoltaic effect. When
          integrated into a renewable energy system, these technologies
          complement each other by providing a continuous and reliable power
          supply. Wind power is often more abundant during certain times, while
          solar power is consistent during daylight hours, resulting in a more
          stable overall energy output.
        </Accordion>
        <Accordion
          id='Section2'
          isOpen={openAccordion === 'Section2'}
          onToggle={handleAccordionToggle}
          title={`What sets EcoSolution's renewable energy solutions apart from others on the market?`}
        >
          Our renewable energy solutions stand out through a comprehensive
          approach covering solar, wind, and cutting-edge technologies. We
          prioritize customization to meet specific needs, uphold environmental
          stewardship, boast a seasoned team with a proven track record, and
          maintain a client-centric focus. Choosing EcoSolution means opting for
          innovative, tailored, and environmentally conscious energy solutions.
        </Accordion>
        <Accordion
          id='Section3'
          isOpen={openAccordion === 'Section3'}
          onToggle={handleAccordionToggle}
          title='How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?'
        >
          Businesses and communities gain sustainable advantages by integrating
          EcoSolution's renewable energy solutions. Our tailored approach
          ensures cost-effective, eco-friendly energy solutions, fostering
          environmental responsibility, reducing long-term operational costs,
          and promoting energy independence for a resilient future.
        </Accordion>
        <Accordion
          id='Section4'
          isOpen={openAccordion === 'Section4'}
          onToggle={handleAccordionToggle}
          title='What measures does EcoSolution take to ensure the environmental sustainability of its products?'
        >
          EcoSolution prioritizes environmental sustainability by employing
          eco-friendly materials in product manufacturing, minimizing carbon
          footprint in production processes, and ensuring energy-efficient
          designs. We are committed to responsible sourcing, recycling
          initiatives, and continuous improvement in green practices to mitigate
          environmental impact.
        </Accordion>
        <Accordion
          id='Section5'
          isOpen={openAccordion === 'Section5'}
          onToggle={handleAccordionToggle}
          title='How does EcoSolution engage with local communities and support a just transition to renewable energy?'
        >
          EcoSolution fosters community engagement by collaborating with local
          stakeholders, providing education on renewable energy benefits, and
          offering job opportunities. Our commitment to a just transition
          involves prioritizing social equity, supporting local economies, and
          ensuring that the shift to renewable energy is inclusive and
          beneficial for all.
        </Accordion>
      </div>

      <div className={styles.helpWrapper}>
        <p>Didn't find the answer to your question? </p>
        <FilledButton text='Contact Us' />
      </div>
    </section>
  )
}
export default FAQ
