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
            <div className="flex" > 
            <input className="m-3 bg-white placeholder-black-500 text-xl pr-2 pl-2 w-64 rounded-2xl"
            
            placeholder="What can I get you today?!" 
            value={searchBar} 
            onChange={handleSearch}
            id="search-input"
            />   
                <img src={magnifier} className="size-9" />
            </div>
        </form>
    )
}


export default SearchBar