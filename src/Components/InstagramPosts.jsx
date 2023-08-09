import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

function InstagramPosts() {
  return (
   
        <div className='space-x-10 mb-10' style={{ display: 'flex', justifyContent: 'center' }}>
             <InstagramEmbed url="https://www.instagram.com/p/CuVOgwVuvcM/" width={328} />
             <InstagramEmbed url="https://www.instagram.com/p/CvDk2_EOqpx/" width={328} />
             <InstagramEmbed url="https://www.instagram.com/p/Cswyz30u_ec/" width={328} />
             <InstagramEmbed url="https://www.instagram.com/p/CpQq5XsDUzp/" width={328} />
        </div>
  )
}

export default InstagramPosts