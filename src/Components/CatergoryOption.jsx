import React from 'react'


function CatergoryOption({name,img}) {
  const image = require(`../assets/img/${img}`)
  const catergoryBG=
  {
      backgroundImage:`url(${image})`,
      backgroundPosition:`center`,
      backgroundSize:`cover`,
      backgroundRepeat:`no-repeat`,
      backgroundAttachment:`local`,
      backgroundOrigin:'border-box',
      

  }

  
  return (
   <div className='w-40 h-40 rounded-full grid grid-cols-1 items-center justify-center  border-solid border-2  text-center mt-16 mb-14 relative hover:border-lime-500' style={catergoryBG} >
        
            <p className='z-40 text-white '>{name}</p>
           
            
            {console.log(img)}
        <div className='absolute h-full w-full rounded-full bg-black opacity-60 z-30 hover:bg-transparent'></div>      
   </div>
  )
}

export default CatergoryOption