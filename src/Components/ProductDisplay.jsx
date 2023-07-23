import React from 'react'
import BellyRing from './BellyRing.jsx'
import NoseRing from './NoseRing.jsx'
import EmailSubcriptionSection from './EmailSubcriptionSection.jsx'
import TongueRing from './TongueRing.jsx'
import NippleRing from './NippleRing.jsx'
import InstagramPosts from './InstagramPosts.jsx'

function ProductDisplay() {
  return (
    <div className=''>
       <div className='container'>
            <BellyRing/>
            <NoseRing/>
       </div>
            
            <EmailSubcriptionSection/>
        <div className='container'>
            <NippleRing/>
            <TongueRing/>
        </div>
        <div>
          <InstagramPosts/>
        </div>
    </div>
  )
}

export default ProductDisplay