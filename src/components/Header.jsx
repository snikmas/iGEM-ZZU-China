import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'


// #D2E0E4
function Header() {

  return (
    <header className='bg-header w-screen flex flex-row sticky top-0'>
      <div className='container h-13 flex justify-between mx-60  items-center my-4'>
        <div className='logo'>
          <a href="#">
            <img src={assets.logo} alt="logo" className='w-24' />
          </a>
        </div>
        < Navbar />
      </div>

    </header>
  )
}

export default Header