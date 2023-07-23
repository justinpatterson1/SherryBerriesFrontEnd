import React from 'react'
import spiritual from '../assets/img/body-positive-waistbead.jpeg'

function EmailSubcriptionSection() {

    const catergoryBG=
    {
        backgroundImage:`url(${spiritual})`,
        backgroundPosition:`bottom center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        backgroundOrigin:'border-box',
        height:'80vh',
        width:'100%'
        
  
    }


  return (
    <div className='' style={catergoryBG}>
            <form action="" className='h-full'>
                <div className='flex justify-center items-center h-full pb-5 mr-20'>
                    <input type="text"  placeholder='Email....' className='w-96 h-14 px-5'/>
                    <button className='bg-green-500 p-4 ml-4 text-white hover:bg-white hover:text-green-500'>Submit</button>
                </div>
                
            </form>
    </div>
  )
}

export default EmailSubcriptionSection