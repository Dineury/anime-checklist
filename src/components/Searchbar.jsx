import React from "react";
import { useState } from "react";
import magnifier from '../Assets/Magnifier.png'

function SearchBar({ onSearch})  {
const [searchBar, setSearchBar] = useState('')
const handleSearch = (e) => {
    setSearchBar(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault()
 onSearch(searchBar)
}


    return (
        <form onSubmit={handleSubmit}  >
            <div className="flex justify-center " > 
            <input className="m-3 bg-white placeholder-black-500 text-xl pr-2 pl-2 w-64 rounded-2xl"
            
            placeholder="What can I get you today?!"
            value={searchBar} 
            onChange={handleSearch}
            id="search-input"
            />   
                <img src={magnifier} className=" rounded-10 size-10 drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)] 
                 mt-2 hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] transition-transform duration-200 
                  hover:scale-110" />
            </div>
        </form>
    )
}


export default SearchBar