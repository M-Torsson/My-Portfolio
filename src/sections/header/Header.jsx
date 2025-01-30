import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Image" />
        </div>
        <h3>Muthana Torsson</h3>
        <p>
        Programming is the art of transforming ideas into instructions that a computer can understand,
        creating applications that solve problems and shape the future.
        It’s not just about writing code but about thinking critically and creatively.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank"
              rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header