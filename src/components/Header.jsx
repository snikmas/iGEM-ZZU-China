import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'
import { Link } from 'react-router'


// #D2E0E4
function Header() {

  return (
    <header className='bg-header flex flex-row sticky top-0'>
      <div className='container h-13 flex justify-between mx-60  items-center my-4'>
        <div className='logo'>
          <Link to="/">
            <img src="https://static.igem.wiki/teams/5822/assets/logo.webp" alt="logo" className='w-25' />
          </Link>
        </div>
        < Navbar />
      </div>

    </header>
  )
}

export default Header