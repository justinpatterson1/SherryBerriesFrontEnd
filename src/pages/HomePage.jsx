import React from 'react'
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero.jsx";
import Catergory from "../Components/Catergory.jsx";
import ProductDisplay from '../Components/ProductDisplay.jsx'
import Footer from '../Components/Footer';
//import LoginPage from '../Components/LoginPage';

function HomePage() {
  return (
    <>
         <Navbar/>
        <Hero/>
        <Catergory/>
        <ProductDisplay/>
        <Footer/>
        
    </>
  )
}

export default HomePage