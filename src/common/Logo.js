import React from 'react'
import logoSRC from '../assets/Logo.svg'
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <Link to="/">
      <img className="Logo" src={logoSRC} aria-label="Little Lemon Logo"></img>
    </Link>
  )
}

export default Logo
