import React, { useEffect, useState } from "react";

function Recommendations () {
const [ recommend, setRecommend ] = useState([])

const handleFetch = async () => {
try {
    const promises = []
    for(let i = 0; i < 20; i++) {
        promises.push(fetch('https://api.jikan.moe/v4/random/anime')
        .then(res => res.json()))
    }
    const results = await  Promise.all(promises)
 const animeArr = results.map(r => r.data)

const safeArr = animeArr.filter(anime => {
  const isHentaiByRating =
    anime.rating?.includes("Rx") ||
    anime.rating?.includes("Hentai")

  const isHentaiByGenre =
    anime.genres?.some(g => g.mal_id === 12)

  return (
    !isHentaiByRating &&
    !isHentaiByGenre &&
    anime.type !== "Music" &&
    anime.type !== "PV" &&
    anime.type !== "CM" &&
    anime.images?.jpg?.image_url
  )
})

console.log(safeArr)
const uniqueArr = safeArr.filter((anime, index, self) => {
  return self.findIndex(a => a.mal_id === anime.mal_id) === index
})

setRecommend(uniqueArr.slice(0, 10))

} catch(err) {
    console.log(err)
}
}

useEffect(() => {
    handleFetch()
},[])

return (
    <div className=" flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 no-scrollbar" >
        {
        recommend.map(anime => {
            return(<div  key={anime.mal_id} 
            className='image_wrapper snap-center shrink-0 w-52 border-2 bg-linear-to-br from-gray-400
    to-gray-800' >

  <div  className=' anime_container  relative' >
              <div className="three-dots absolute top-0.5 right-2 text-2xl bg-cyan-600 p-0.2 rounded">⋮</div>
                  <select name='drop-down'
                   className='options-container absolute  w-3/45 pb-2 right-1/35 opacity-0 cursor-pointer' > 
                <option value="Watching">Watching</option>
                <option value="completed">completed</option>
                <option value="Plan to watch">Plan to watch</option>
              </select>

              <img src={anime.images.jpg.image_url} className='anime_img size-55' alt={anime.title}/>
              <p>{anime.title}</p>
            </div>
          </div>

            )
        })


        }
    </div>
)

}


export default Recommendations