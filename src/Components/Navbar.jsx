import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import {HiOutlineShoppingCart} from 'react-icons/hi2'
import {HiOutlineUser}  from 'react-icons/hi2'
import SearchBar from './SearchBar'
import BellyJewelryContext from '../context/BellyJeweryContext'

function Navbar() {

    const{searchBarVisibility, setSearchBarVisibility}= useContext(BellyJewelryContext)
  return (
 <>
    <nav className='w-full sticky top-0 bg-black py-4 z-50 '>
        <div class="flex  justify-between  container text-white" >
                <div>SherryBerries</div>
                <div class="navigation-tabs test">
                    <ul className='flex space-x-6'>
                        <li className='hover:text-pink-300'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='hover:text-pink-300'>
                            <Link to="/jewelry">Jewelry</Link>
                        </li>
                        <li className='hover:text-pink-300'>
                            <Link to="/Merchandis">Mechandise</Link>
                        </li>
                        <li className='hover:text-pink-300'>
                            <Link to="/About"> About Us</Link>
                        </li>
                    </ul>
                </div>
            <div class="flex space-x-4">
                <HiMagnifyingGlass className='text-white text-3xl' onClick={()=>{setSearchBarVisibility(!searchBarVisibility)}}/>
                <Link to='auth'><HiOutlineUser className='text-white text-3xl'/></Link>
                <div className='relative w-7 h-7'>
                     <HiOutlineShoppingCart className='text-white text-3xl'/>
                     <div className='h-4 w-4 rounded-full absolute top-0 right-0 bg-pink-400 text-center flex items-center justify-center text-xs'>99</div>
                </div>
                
            </div>
        </div>
        
    </nav>
    <SearchBar/>
</>
  )
}

export default Navbar