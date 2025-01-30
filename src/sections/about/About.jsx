import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import { HiDownload } from "react-icons/hi";
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
              <p>
              Hi, my name is Muthana Torsson. I am a versatile developer living in Sweden, 
              skilled in both web development and software programming. 
              I thrive on turning complex ideas into simple, functional, 
              and visually appealing solutions. Whether it's designing a modern, 
              user-friendly website or building a Python-based system to solve challenges, 
              I am dedicated to delivering high-quality results.
              Let's work together to bring your ideas to life—get in touch 
              with the details of your project today
              </p>
              <p>
              Building efficient, innovative solutions has always been my passion. 
              With expertise in Python, HTML, and CSS, 
              I specialize in creating responsive websites, automating workflows, 
              and developing tools that make a real difference
              </p>
              <a href={CV} download className='btn primary'>Download CV 
                <HiDownload/></a>
          </div>
      </div>
    </section>
  )
}

export default About