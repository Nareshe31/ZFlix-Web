import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const getYear = (date) => {
  return date?.slice(0, 4);
};


function TvShow() {
  const [data, setdata] = useState({})
  const [watch, setwatch] = useState(false)

  let { id } = useParams()
  useEffect(() => {
    async function getAllResults() {
      await getData()
      
    }
    getAllResults()
    return () => {

    }
  }, [])

  const getData = async () => {
    try {
      var response = await axios.get(
        `
          https://api.themoviedb.org/3/tv/${id}?api_key=dfc43a605d906f9da6982495ad7bb34e&language=en-US&append_to_response=videos`
      );
      setdata(response.data);
      // console.log(response.data.videos);
      
      document.title = response.data.title + " (" + getYear(response.data.first_air_date) + ")"
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="w-content">
      <div className={watch?"content active":"content"}>
        {Object.keys(data).length ?
          <div className="content-bg">
            {/* <Image src={"https://image.tmdb.org/t/p/original" + data.backdrop_path} thumbnail={"https://pbs.twimg.com/media/FFXHDTjXEA8bBXH?format=jpg&name=900x900"} /> */}
            <img crossOrigin="anonymous" id="bg-poster" src={"https://image.tmdb.org/t/p/original" + data.backdrop_path} alt="" srcset="" />
          </div>
          : null
        }
        <div className="content-data">
          <div className="content-info">
            <div className="content-poster">
              <img src={"https://image.tmdb.org/t/p/w780" + data.poster_path} alt="" srcset="" />
            </div>
            <div className="content-plot">
              <h2 className="content-title">{data.name}
              </h2>
              <p className="content-tagline">{data.tagline}</p>
              <p className="content-details"><i className="fas fa-calendar-alt"></i> {getYear(data.first_air_date)}<span className="dot">.</span>  
                <span><i className="fas fa-star"></i> {data.vote_average}</span><span className="dot">.</span> 
                <span className="runtime"><i className="fas fa-clock"></i> {data.runtime} mins</span>
              </p>
              <div className="genres">
              {data?.genres?.map((item,i)=><span className="genre">{item.name}</span>)}
              </div>
              <p className="content-overview">{data.overview}</p>
              <div className="show">
                <div className="watch-now" onClick={()=>setwatch(true)}>
                  <i class="fas fa-play"></i>
                  Watch Now
                </div>
                <div className="show-trailer" onClick={()=>setwatch(true)}>
                  Trailer
                </div>
              </div>
              
            </div>
          </div>
          <div className="content-cast">

          </div>
          <div className="content-rating">

          </div>

        </div>
      </div>
      {/* {Object.keys(data).length && watch ?
        <div className={watch?"watch-container active":"watch-container"}>
          <div className="close-btn" onClick={()=>setwatch(false)}><i class="fas fa-times"></i></div>
          <iframe src={"https://www.2embed.ru/embed/tmdb/movie?id="+data.id} allowFullScreen={true} title={data.title} frameborder="0">Loading</iframe>
        </div>
        : null
      } */}
    </div>
  )
}

export default TvShow;