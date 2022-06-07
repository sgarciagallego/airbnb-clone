import React from 'react';
import Logo from '../images/Logo.png'

const Navbar = () => {
  return (
    <header>
      <div><a href='/'><img src={Logo} alt='airbnb logo' /></a></div>
    </header>
  )
}

export default Navbar;