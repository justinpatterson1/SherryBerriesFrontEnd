import React, { useContext,useState,useEffect } from 'react'
import JewelryList from './JewelryList'
import BellyJewelryContext from '../context/BellyJeweryContext'
import ReactPaginate from 'react-paginate';

function Jewelry() {

  const{jewelry,setJewelry,item,setItems} = useContext(BellyJewelryContext)
  
  
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage,setItemsPerPage] = useState(12)
  //const [endOffset,setEndOffSet] = useState(0)
  const [currentItems,setCurrentItems] = useState([])
  const [pageCount,setPageCount] = useState(0)
  const [filter,setFilter] = useState({

      bodyPart:"",
      size:"",
      color:""
  })


  //console.log(item)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  useEffect(()=>{

    const endOffset =  itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(item.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(item.length / itemsPerPage));

  },[itemOffset,itemsPerPage,item])


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jewelry.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  const handleSubmit = (event) =>{
    let filteredJewelry = jewelry;

    if(filter.bodyPart != ""){
      filteredJewelry = filteredJewelry.filter((j)=> j.bodyPart === filter.bodyPart)

    }

    if(filter.size !=''){
      filteredJewelry = filteredJewelry.filter((j)=> j.size === filter.size)
    }

    if(filter.color !=''){
      filteredJewelry = filteredJewelry.filter((j)=> j.color === filter.color)
    }
  

   setItems(filteredJewelry)

   event.preventDefault()
    
    console.log(filteredJewelry)
  }

  return (
    <>
    <div className=' bg-gray-200 h-16 drop-shadow-2xl sticky top-12 pt-5 pb-7' >

                  <form action="" className= 'flex flex-row justify-center space-x-7 items-center h-full container'>
                    <div className='flex flex-row space-x-5 items-center  justify-center basis-full mt-4'>
                      <label htmlFor="bodyPart"> Body Part:</label>
                    <select name="bodyPart" id="bodyPart"  onChange={(evt)=>{setFilter({...filter,bodyPart:evt.target.value})}} className='w-1/2 bg-gray-200  border-b-2 h-10 border-pink-300 hover:border-pink-300 hover:border-2 rounded-lg'>
                        <option value="" selected disabled hidden className='hover:bg-pink-300'>All Body-Parts</option>
                        <option value="nose">Nose</option>
                        <option value="lip">Lip</option>
                        <option value="tongue">Tongue</option>
                        <option value="belly-button">Belly-Button</option>
                        <option value="ear">Ear</option>
                    </select>
                    </div>
                  
                    <div className='flex flex-row space-x-5 items-center  justify-center basis-full mt-4'>
                      <label htmlFor="guage">Guage:</label>
                    <select name="guage" id="guage" onChange={(evt)=>{setFilter({...filter,size:evt.target.value})}}  className='w-1/2 bg-gray-200  border-b-2 h-10 border-pink-300 hover:border-pink-300 hover:border-2 rounded-lg'>
                        <option value="" selected disabled hidden>All Sizes</option>
                        <option value ='1.6mm'>14 G</option>
                        <option value='1.2mm'>16 G</option>
                        <option  value='1mm'>18 G</option>
                    </select>
                    </div>

                    <div className='flex flex-row space-x-5  items-center  justify-center basis-full mt-4'>
                      <label htmlFor="color"> Color:</label>
                    <select name="color" id="color"  onChange={(evt)=>{setFilter({...filter,color:evt.target.value})}} className='w-1/2 bg-gray-200  border-b-2 h-10 border-pink-300 hover:border-pink-300 hover:border-2 rounded-lg'>
                        <option value="" selected disabled hidden>All Colors</option>
                        <option value ='red'>Red</option>
                        <option value='blue'>Blue</option>
                        <option  value='green'>Green</option>
                        <option  value='purple'>Purple</option>
                        <option  value='pink'>Pink</option>
                    </select>
                    </div>
                    <input type="button" value="Submit" 
                    className='hover:bg-green-500 py-3 px-4 border-2 border-green-500 rounded-lg text-pink-500 hover:text-pink-200 mr-3 '
                    onClick={handleSubmit}
                    />
                  </form>
            </div>
    <div className='container w-full z-0'>
        <div className=''>
            {/* <div className='container basis-1/4 bg-gray-100 h-full  w-full sticky top-10'> 
            <div className=' flex justify-items-center  w-1/2 ml-7 my-5'>
              <div>
                <h1 className='text-2xl'>Filters</h1>
                <div className='py-8'>
                  <h3><b>Body Part</b></h3>
                  <div className='flex space-x-2 mt-2'>
                      <input type="checkbox" name='nose' value='nose' />
                      <label htmlFor="nose">Nose</label>
                  </div>
                  <div className='flex space-x-2 mt-2'>
                      <input type="checkbox" name='lip'  value='lip'/>
                      <label htmlFor="lip">Lip</label>
                  </div>
                  <div className='flex space-x-2 mt-2'>
                      <input type="checkbox" name='tongue' value ='tongue' />
                      <label htmlFor="tongue">Tongue</label>
                  </div>
                  <div className='flex space-x-2 mt-2'>
                      <input type="checkbox" name='belly-button' value ='belly-button' />
                      <label htmlFor="belly-button">Belly-Button</label>
                  </div>
                  <div className='flex space-x-2 mt-2'>
                      <input type="checkbox" name='Ear' value ='Ear' />
                      <label htmlFor="Ear">Ear</label>
                  </div>
                  </div>

                  <div className='py-8'>
                  <h3><b>Gauge</b></h3>
                  <div className='flex space-x-2 mt-2'>
                      <input type="checkbox" name='1mm' value='1mm' />
                      <label htmlFor="1mm">18 Gauge</label>
                  </div>
                  <div className='flex space-x-2 mt-2'>
                      <input type="checkbox" name='1.2mm'  value='1.2mm' onClick={(evt)=>{console.log(evt.target.value)}}/>
                      <label htmlFor="1.2mm">16 Gauge</label>
                  </div>
                  <div className='flex space-x-2 mt-2'>
                      <input type="checkbox" name='1.6mm' value ='1.6mm' />
                      <label htmlFor="1.6mm">14 Gauge</label>
                  </div>
                  </div>

                  
                  <div className='py-8'>
                    <h3><b>Colors</b></h3>
                    <input type="color" name="Red" id="" value='#ff0000' />
                    <input type="color" name="Blue" id="" value='#0000ff' />
                    <input type="color" name="Yellow" id="" value='#ffff00' />
                    <input type="color" name="Green" id="" value='#00ff00' />
                    <input type="color" name="Purple" id="" value='#bf00ff' />
                    <input type="color" name="Pink" id="" value='#ff00bf' />
                  </div>
                
              </div>
               
            </div>
                
            
            </div> */}
            
            <div className='basis-3/4 grid grid-cols-4 gap-5 justify-items-center mt-8 mb-10'>

              {
                 currentItems.map((jewelry)=>(<JewelryList id={jewelry._id} key={jewelry._id} name={jewelry.name} price={jewelry.price}  img={jewelry.img}/>))
              } 
            </div>
            
            

        </div>
          <div className='flex justify-center'>

            
              <div className='flex justify-end pr-10 w-3/4 justify-self-end'>
                  <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName='list-none flex justify-center items-center space-x-4 my-5 text-xl'
                        pageLinkClassName='cursor-pointer hover:bg-[#ff85d8] p-2 hover:text-white'
                        previousLinkClassName='cursor-pointer hover:bg-[#ff85d8] p-2 hover:text-white'
                        nextLinkClassName='cursor-pointer hover:bg-[#ff85d8] p-2 hover:text-white'
                        activeClassName='bg-[#ff85d8] p-2 text-white'
                    />
              </div>
       </div>
       
    </div>
    </>
  )
}

export default Jewelry