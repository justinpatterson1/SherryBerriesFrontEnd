import React,{useContext} from 'react'
import NippleRingProductList from './NippleRingProductList.js'
import BellyJewelryContext from '../context/BellyJeweryContext.jsx'
import jewelyGirl from '../assets/img/jewelry-girl-pic.jpg'
import {FaLessThan} from "react-icons/fa"
import {FaGreaterThan} from "react-icons/fa"

function NippleRing() {
    const {jewelry} = useContext(BellyJewelryContext)
    const BG = {
        // 'width': "400px",
        'height': "100%",
        'backgroundImage': `url(${jewelyGirl})`,
        "backgroundPosition": " center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "margin": "0 auto"
    }
  return (
    <div>

<div className='h-screen flex flex-row  items-center'>
        
            <div className='h-3/4 basis-1/4'>
                <div className="belly-ring-section h-40 border-black border-solid border-2 shadow-2xl" style={BG}>
                        <div class="cover">
                            <h2>
                                <u>Jewelry</u>
                            </h2>
                        </div>
                    </div>

                
            </div>

            <div className='basis-3/4  flex items-center'>
                <div className='flex justify-center  w-full items-center space-x-10 h-full'>
                    <FaLessThan className='hover:w-6 hover:h-6 '/>
                        <div className='grid grid-cols-3 space-x-5'>
                            {jewelry.map((belly)=>(<NippleRingProductList key={belly.id} id={belly.id} img={belly.img} name={belly.name} price={belly.price} />))}
                        </div>
                        <FaGreaterThan className='hover:w-6 hover:h-6 '/>
                </div>

                    </div>
                
                
                
        </div>

    </div>
  )
}

export default NippleRing