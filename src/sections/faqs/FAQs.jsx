import { useEffect } from 'react'
import faqs from './data'
import FAQ from './FAQ'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './faqs.css'

const FAQs = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })

  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
      Here are some common questions. Click to reveal the answers, 
      and feel free to reach out through the contact section if you have more!
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs