
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Poster from './molecules/Poster';
import ScrollContainer from 'react-indiana-drag-scroll'

function Home() {
  const [movieData, setmovieData] = useState([])
  const [tvData, settvData] = useState([])

  useEffect(() => {
    async function getAllResults() {
      await getMovieData();
      await getTvData()
      await getYTSData()
    }
    getAllResults()
    return () => {

    }
  }, [])

 
  document.title = "Watch Movies & TV Shows"

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

  const getTvData = async () => {
    try {
      var response = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=dfc43a605d906f9da6982495ad7bb34e`
      );
      settvData(response.data.results);
    } catch (error) {
      console.log("error");
    }
  };

  const getYTSData = async () => {
    try {
      var response = await axios.get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=10`
      );
      console.log(response.data);
      // setmovieData(response.data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="main-content" >
      <section className="section-main">
        <div className="section-header">
          <h2 className="heading">Trending Movies</h2>
          <p>Here are some of the most recent movies recommended by our community</p>
        </div>
        <div className="whole-poster">
          <ScrollContainer className="poster-container">
            {movieData.map((item) => (
              <Poster type="movie" key={item.id} item={item} />
            ))}
          </ScrollContainer>
        </div>
      </section>

      <section className="section-main">
        <div className="section-header">
          <h2 className="heading">Trending TV Shows</h2>
          <p>Check out what everyone is talking about</p>
        </div>
        <div className="whole-poster">
          <ScrollContainer className="poster-container">
            {tvData.map((item) => (
              <Poster type="tv" key={item.id} item={item} />
            ))}
          </ScrollContainer>
        </div>
      </section>
    </div>
  )
}

export default Home