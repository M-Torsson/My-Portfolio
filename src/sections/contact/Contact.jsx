import contacts from './data'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
      Feel free to contact me through the links below!
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} 
            target="_blank" rel="noopner noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact