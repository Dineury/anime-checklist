import { useState } from 'react'
import './App.css'
import SearchBar from './components/Searchbar'

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
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
    const data = await res.json();
    setAnimes(data.data)
  } catch(err) {
    console.log(err)
  }
}

  return (
    <>
        <div>
      <h1>🎌 Anime Checklist</h1>
      <p>Search for an anime below 👇</p>
      <SearchBar onSearch={handleSearch}/>
    </div>
      {
        animes.map(anime => {
          console.log(anime)
          return (<div id='container_wrapper' key={anime.mal_id} >
  <div id='anime_container' >
              <img src={anime.images.jpg.image_url} className='anime_img'/>
              <p>{anime.title}</p>
              <select>
                <option value="Watching">Watching</option>
                <option value="completed">completed</option>
                <option value="Plan to watch">Plan to watch</option>
              </select>
            </div>
          </div>
          )
        })
      }
    </>
  )
}

export default App
