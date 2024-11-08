"use client"
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-950 h-12 py-2 px-3 flex justify-between items-center text-white">
        <div>
            <h1 className='text-2xl font-semibold'>
                <a href="">PAKWHEELSCOM</a>
            </h1>
        </div>
        <div>
        <ul className='flex space-x-5'>

                <li className='hover:text-red-800'>Home</li>
                <li className='hover:text-red-800'>About Us</li>
                <li className='hover:text-red-800'>Contact Us</li>
                <li className='hover:text-red-800'>Used cars</li>
                <li className='hover:text-red-800'>Videos</li>
            </ul>
        </div>
        <div>
            <ul className='flex space-x-4'>
                <li className='hover:text-red-800'>Buy new cars</li>
                <li className='hover:text-red-800'>Sell cars</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
