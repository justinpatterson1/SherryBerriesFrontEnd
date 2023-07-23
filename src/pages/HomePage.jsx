import React from 'react'
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero.jsx";
import Catergory from "../Components/Catergory.jsx";
import ProductDisplay from '../Components/ProductDisplay.jsx'

function HomePage() {
  return (
    <>
         <Navbar/>
        <Hero/>
        <Catergory/>
        <ProductDisplay/>
    </>
  )
}

export default HomePage