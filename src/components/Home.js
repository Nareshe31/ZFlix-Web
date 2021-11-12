
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Poster from './molecules/Poster';

function Home() {
  const [movieData, setmovieData] = useState([])
  useEffect(() => {
    async function getAllResults() {
      await getMovieData();
    }
    getAllResults()
    return () => {

    }
  }, [])

  document.title = "ZFlix - Home"

  const getMovieData = async () => {
    try {
      var response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=dfc43a605d906f9da6982495ad7bb34e`
      );
      setmovieData(response.data.results);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="main">
      <div className="whole-poster">
        <div className="poster-header">Trending Movies</div>
        <div className="poster-container">
          {movieData.map((item) => (
            <Poster type="movie" key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home