import React from 'react'
import heroImg from '../assets/img/sherry-Berries-hero.jpg'

function Hero() {

    const BG=
    {
        backgroundImage:`url(${heroImg})`,
        backgroundPosition:`top center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`fixed`,
        height:'88vh'
    }

  return (
    <div className='' style={BG}>

    </div>
  )
}

export default Hero