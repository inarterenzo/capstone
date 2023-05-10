import {useState,useRef} from 'react'
import {Link} from 'react-router-dom'
import Hamburger from '../assets/🦆 icon _hamburger menu_.svg'
import Close from '../assets/close.svg'

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav>
      <ul className="desktop">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Bookings</Link></li>
        <li><Link to="/order">Order online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      {
        menuOpen &&
          <div className="mobilemenu">
            <ul className='mobile'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Menu</Link></li>
              <li><Link to="/booking">Bookings</Link></li>
              <li><Link to="/order">Order online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
      }
      {
        menuOpen ?
        <img className="MenuButton mobile" onMouseDown={toggleMenu} src={Close} aria-label='A button to close the menu.'/>
        :
        <img className="MenuButton mobile" onMouseDown={toggleMenu} src={Hamburger} aria-label='A button to open a Menu.'/>
      }
    </nav>
  )
}

export default Menu
