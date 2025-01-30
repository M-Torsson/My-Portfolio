import Logo from '../../assets/logo.png'
import data from './data'
import { IoIosColorPalette } from 'react-icons/io'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        < a herf="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a herf={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon'><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar