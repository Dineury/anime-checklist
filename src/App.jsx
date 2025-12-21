import { useState } from 'react'
import './App.css'
import SearchBar from './components/Searchbar'
import Navbar from './components/Navbar'

function App() {
const [animes, setAnimes] = useState([])
const [checklist, setChecklist] = useState({
  watching: [],
  completed: [],
  planToWatch: []
});

function addToList(listName, anime) {
  setChecklist(prev => ({
    ...prev,
    [listName]: [...prev[listName], anime]
  }));
}


const handleSearch = async (query) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=10`)
    const data = await res.json();
    setAnimes(data.data)
  } catch(err) {
    console.log(err)
  }
}

  return (
    <>
      <Navbar/>
    
    <div className='max-w-[1920px] mx-auto px-4 p-[2em] text-center justify-self-center ' >
        <div id='Search-bar-div' className='items-center' >  
      <h1>🎌 Anime Checklist</h1>
      <p>Search for an anime below 👇</p>
      <SearchBar onSearch={handleSearch}/>
    </div>
   <div className=' justify-center grid grid-cols-3 gap-30 m-10 ' >
      {
        animes.map(anime => {
          return (<div id='image_wrapper' key={anime.mal_id} className='w-[201px]  border-2 m-auto bg-linear-to-br from-gray-400 to-gray-800  ' >
  <div id='anime_container' className='relative' >
              <div className="three-dots absolute top-0.5 right-2 text-2xl bg-cyan-600 p-0.2 rounded">⋮</div>
                  <select name='drop-down' className='options-container absolute   opacity-0 cursor-pointer' >
                <option value="Watching">Watching</option>
                <option value="completed">completed</option>
                <option value="Plan to watch">Plan to watch</option>
              </select>
                <div/>
            
              <img src={anime.images.jpg.image_url} className='anime_img'/>
              <p>{anime.title}</p>
            </div>
          </div>
          )
        })
      }
     </div>
    </div>
    </>
  )
}

export default App
