import React,{useState,useEffect} from "react";
import BellyJewelryContext from "../context/BellyJeweryContext.jsx";
import HomePage from "../pages/HomePage.jsx";
import Login from "../pages/LoginPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import JewelryPage from "../pages/JewelryPage.jsx";
function App() {

  const [searchBarVisibility, setSearchBarVisibility] = useState(false)
  const [isLoggedIn, setIsloggedIn] = useState({status:false,user:{}})
  const [jewelryPageItems,setJewelryPageItems] = useState([])
 const [jewelry,setJewelry] = useState([])
  const [bellyRing,setBellyRing] = useState([])
  const [noseRing,setNoseRing] = useState([])
  const [nippleRing,setNippleRing] = useState([])
  const [tongueRing,setTongueRing] = useState([])
  const [item,setItems] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/jewelry')
    .then(res => res.json())
    .then(json => {
      
      setJewelry(json.data)
      setItems(json.data)
      //console.log(json.data)
    
    })
  
 
},[])


useEffect(()=>{
  fetch('http://localhost:4000/jewelry?catergory=Belly-Ring')
  .then(res => res.json())
  .then(json => {
    
    setBellyRing(json.data)
    //console.log(json.data)
  
  })

 
},[])

useEffect(()=>{
  fetch('http://localhost:4000/jewelry?catergory=Nipple-Ring')
  .then(res => res.json())
  .then(json => {
    
    setNippleRing(json.data)
    console.log(json.data)
  
  })

 
},[])

useEffect(()=>{
  fetch('http://localhost:4000/jewelry?catergory=Tongue-Ring')
  .then(res => res.json())
  .then(json => {
    
    setTongueRing(json.data)
    //console.log(json.data)
  
  })
},[])

  useEffect(()=>{
    fetch('http://localhost:4000/jewelry?catergory=Nose-Ring')
    .then(res => res.json())
    .then(json => {
      
      setNoseRing(json.data)
      //console.log(json.data)
    
    })
  
 
},[])


  return (
  <BellyJewelryContext.Provider value={{jewelry,setJewelry,searchBarVisibility, setSearchBarVisibility,isLoggedIn, setIsloggedIn,bellyRing,setBellyRing,noseRing,setNoseRing,nippleRing,setNippleRing,tongueRing,setTongueRing,item,setItems}}>
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={<HomePage/>}/>
             
          <Route path="/auth" element={<Login/>}/>
          
          <Route path="/Jewelry"  element={<JewelryPage/>}/>

         
             
  
        
    </Routes>
    </BrowserRouter>
      
    
    </BellyJewelryContext.Provider>
  );
}

export default App;
