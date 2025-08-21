import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'
import { Link } from 'react-router'


// #D2E0E4
function Header() {

  return (
    <header className='bg-header flex justify-between sticky'>
      <div className='header-container h-13 flex justify-between w-full'>
        <div className='logo'>
          <Link to="/">
            <img src="https://static.igem.wiki/teams/5822/assets/logo.webp" alt="logo" className='w-25 m-0!' />
          </Link>
        </div>
        < Navbar />
      </div>

    </header>
  )
}

export default Header

