import React,{useState} from 'react'
import waistBead from '../assets/img/waist-bead-pic.jpg'
import jewelryGirl from '../assets/img/jewelry-girl-pic.jpg'
import merch from '../assets/img/merch-pic.jpg'
import CatergoryOption from './CatergoryOption'
function Catergory() {
    const [catergory,setCatergory] = useState([
       {
        id:1,
        img:"waist-bead-pic.jpg",
        name:"Waist-Bead"
       },
       {
        id:2,
        img:'jewelry-girl-pic.jpg',
        name:'Jewelry'
       },
       {
        id:3,
        img:'merch-pic.jpg',
        name:'Merchandise'
       },
       {
        id:3,
        img:'merch-pic.jpg',
        name:'After-care'
       }
     
      
        

    ])

  return (
    <section id="catergory" className="container grid grid-cols-4 justify-center items-center place-items-center mt-16">
        {
            catergory.map((catergory) => (<CatergoryOption key={catergory.id} id={catergory.id} img={catergory.img}  name={catergory.name}/>))
        }
        
    </section>
  )
}

export default Catergory