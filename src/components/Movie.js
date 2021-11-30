import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ScrollContainer from 'react-indiana-drag-scroll'

const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

const getYear = (date) => {
  return date?.slice(0, 4);
};
const getMonth = (date) => {
  return months[date?.slice(5, 7)-1];
};


function Movie() {
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
          https://api.themoviedb.org/3/movie/${id}?api_key=dfc43a605d906f9da6982495ad7bb34e&language=en-US&append_to_response=videos,credits`
      );
      setdata(response.data);
      document.title = response.data.title + " (" + getYear(response.data.release_date) + ")"
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="w-content">
        {Object.keys(data).length ?
        
      <div className={watch?"content active":"content"}>
          <div className="content-bg" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${data.backdrop_path})` }}>
          </div>
          <div className="content-parent">
            <div className="content-hero">
              <div className="content-info">
                <div className="content-poster">
                  <img src={"https://image.tmdb.org/t/p/w780" + data.poster_path} alt="" srcset="" />
                </div>
                <div className="content-plot">
                  <h2 className="content-title">{data.title}
                  </h2>
                  <p className="content-tagline">{data.tagline}</p>
                  <p className="content-details"><i className="fas fa-calendar-alt"></i> {getMonth(data.release_date)} {data?.release_date?.slice(8,10)}, {getYear(data.release_date)}<span className="dot">.</span>  
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
            </div>
            {/* <hr className="h-line"/> */}
            <div className="content-c">
              <div className="c-header">
                <div className="h-line"/>
                <h2>Cast</h2>
                <div className="h-line"/>
              </div>
              <ScrollContainer className="c-container">
                {
                  data.credits.cast.map((item)=>(
                    <div className="c-parent">
                      {item.profile_path?
                        <img className="c-image" src={"https://image.tmdb.org/t/p/original"+item.profile_path} alt="" />
                        :
                        <div className="no-image-container">
                          <img className="no-image" src="/assets/image-not-found.png" alt="not found" srcset="" />
                        </div>
                        }
                      <div className="c-detail">
                        <p className="c-name">{item.name}</p>
                        <p className="c-job"><em>{item.character}</em></p>
                      </div>
                    </div>
                  ))
                }
              </ScrollContainer>
            </div>
            <div className="content-c">
            <div className="c-header">
                <div className="h-line"/>
                <h2>Crew</h2>
                <div className="h-line"/>
              </div>
              <ScrollContainer className="c-container">
                {
                  data.credits.crew.map((item)=>(
                    <div className="c-parent">
                      {item.profile_path?
                        <img className="c-image" src={"https://image.tmdb.org/t/p/original"+item.profile_path} alt="" />
                        :
                        <div className="no-image-container">
                          <img className="no-image" src="/assets/image-not-found.png" alt="not found" srcset="" />
                        </div>
                        }
                      <div className="c-detail">
                        <p className="c-name">{item.name}</p>
                        <p className="c-job"><em>{item.job}</em></p>
                      </div>
                    </div>
                  ))
                }
              </ScrollContainer>
            </div>
            <div className="content-rating">

            </div>
          </div>
        
      </div>
        : null
      }
      {Object.keys(data).length && watch ?
        // <iframe id="ytplayer" type="text/html" width="640" height="360" frameborder='0'
        //   allow='autoplay; encrypted-media'
        // allowfullscreen
        //   src={"https://www.youtube.com/embed/" + data.videos.results[0].key + "?autoplay=1&rel=0"} title={data.title}></iframe>
        <div className={watch?"watch-container active":"watch-container"}>
          {/* {data.videos.results.map(item=><p>{item.type}</p>)} */}

          <div className="close-btn" onClick={()=>setwatch(false)}><i class="fas fa-times"></i></div>
          <iframe src={"https://www.2embed.ru/embed/tmdb/movie?id="+data.id} allowFullScreen={true} title={data.title} frameborder="0">Loading</iframe>
        </div>
        : null
      }
    </div>
  )
}

export default Movie;