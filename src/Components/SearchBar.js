import React,{useContext} from 'react'
import BellyJewelryContext from '../context/BellyJeweryContext'

function SearchBar() {
    const{searchBarVisibility, setSearchBarVisibility} = useContext(BellyJewelryContext)
  return (
    <div className='w-full z-40 absolute'>
        <form className='w-full'>
            <input type="text"  placeholder='Search....' className={searchBarVisibility ? 'w-full py-5 px-3':'hidden'}/>
        </form>
    </div>
  )
}

export default SearchBar