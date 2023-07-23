import React,{useState} from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Catergory from "./Catergory.jsx";
import BellyRing from "./BellyRing.jsx";
import ProductDisplay from './ProductDisplay.jsx'
import BellyJewelryContext from "../context/BellyJeweryContext.jsx";
import HomePage from "../pages/HomePage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const [jewelry,setJewelry] = useState([
    {
      id:1,
      name:' Diamond Tragus 44mm',
      price: '$12.99',
      img:'earring.jpg'
    },

    {
      id:2,
      name:' Diamond Tragus 44mm',
      price: '$12.99',
      img:'labretPost.jpg'
    },

    {
      id:3,
      name:' Diamond Tragus 44mm',
      price: '$12.99',
      img:'labretPost.jpg'
      
    },

])
  return (
  <BellyJewelryContext.Provider value={{jewelry,setJewelry}}>
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={
           <HomePage/>
          }/>
             
          

          <Route path="/Jewelry"  element={ <Navbar/>}/>
             
  
        
    </Routes>
    </BrowserRouter>
      
    
    </BellyJewelryContext.Provider>
  );
}

export default App;
