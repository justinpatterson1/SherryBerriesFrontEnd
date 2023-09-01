import React,{useContext,useState} from 'react'
import NoseRingProductList from './NoseRingProductList.jsx'
import BellyJewelryContext from '../context/BellyJeweryContext.jsx'
import jewelyGirl from '../assets/img/jewelry-girl-pic.jpg'
import {FaLessThan} from "react-icons/fa"
import {FaGreaterThan} from "react-icons/fa"

function NoseRing() {
    const {noseRing,setNoseRing} = useContext(BellyJewelryContext)
    const [page,setPage] = useState(1)
    const BG = {
        // 'width': "400px",
        'height': "100%",
        'backgroundImage': `url(${jewelyGirl})`,
        "backgroundPosition": " center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "margin": "0 auto"
    }


    const nextPage = (evt)=>{
        evt.preventDefault();

        let i = page + 1;

        setPage(i);

    
            fetch(`http://localhost:4000/jewelry?catergory=Nose-Ring&page=${i}`)
            .then(res=>res.json())
            .then((json)=>{
                setNoseRing(json.data)
            })
      
        console.log(page)
    }


    const lastPage = (evt)=>{
        evt.preventDefault();

        if(page > 1){
        let i = page - 1;

        setPage(i);

       
            fetch(`http://localhost:4000/jewelry?catergory=Nose-Ring&page=${i}`)
            .then(res=>res.json())
            .then((json)=>{
                setNoseRing(json.data)
            })
        }
        console.log(page)
    }

  return (
    <div className='h-screen flex flex-row  items-center'>
        
    <div className='basis-3/4  flex items-center'>
        <div className='flex justify-center  w-full items-center space-x-10 h-full'>
            <FaLessThan className='hover:w-6 hover:h-6 ' onClick={(evt)=>{lastPage(evt)}}/>
                <div className='grid grid-cols-4 space-x-5'>
                    {noseRing.map((nose)=>(<NoseRingProductList key={nose._id} id={nose._id} img={nose.img} name={nose.name} price={nose.price} />))}
                </div>
            <FaGreaterThan className='hover:w-6 hover:h-6 ' onClick={(evt)=>{nextPage(evt)}}/>
        </div>

     </div>
           
     <div className='h-3/4 basis-1/4'>
        <div className="belly-ring-section h-40 border-black border-solid border-2 shadow-2xl" style={BG}>
                <div class="cover">
                    <h2>
                        <u>Jewelry</u>
                    </h2>
                </div>
            </div>

         
    </div>      
        
</div>
  )
}


export default NoseRing