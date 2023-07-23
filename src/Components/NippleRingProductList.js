import React from 'react'

function NippleRingProductList({name,img, price}) {
    const image = require(`../assets/img/${img}`)
  return (
    <div>
            <div className='grid grid-cols-1 justify-center '>
        <img src={image} alt="" srcset="" className='h-72 w-48 border-black border-solid border-2 mb-5 hover:shadow-2xl '/>
        <div className='text-center'>
            <h3 className=''>{name}</h3>
            <span>{price}</span>
            
        </div>
        
          <button class="bg-[#ff85d8] px-2 py-1 rounded-md text-white cursor-pointer inline-block text-center mt-4">ADD TO CART</button>
        
    </div>
    </div>
  )
}

export default NippleRingProductList