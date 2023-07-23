import React from 'react'
import { Link } from 'react-router-dom'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import {HiOutlineShoppingCart} from 'react-icons/hi2'
import {HiOutlineUser}  from 'react-icons/hi2'

function Navbar() {
  return (
 
    <nav className='w-full fixed bg-black py-4 z-50'>
        <div class="flex  justify-between  container text-white" >
                <div>SherryBerries</div>
                <div class="navigation-tabs test">
                    <ul className='flex space-x-6'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/jewelry">Jewelry</Link>
                        </li>
                        <li >
                            <Link to="/Merchandis">Mechandise</Link>
                        </li>
                        <li >
                            <Link to="/About"> About Us</Link>
                        </li>
                    </ul>
                </div>
            <div class="flex space-x-4">
                <HiMagnifyingGlass className='text-white text-lg'/>
                <HiOutlineUser className='text-white text-lg' />
                <HiOutlineShoppingCart className='text-white text-lg'/>
            </div>
        </div>
        
    </nav>

  )
}

export default Navbar