import React from "react";
import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <div > 
            <input placeholder="Hola" 
            value={searchBar} 
            onChange={handleSearch}/>
            </div>
        </form>
    )
}


export default SearchBar