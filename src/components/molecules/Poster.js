import React from "react";
import {  Link} from 'react-router-dom';

export default function Poster({ item, type }) {
  const getYear = (date) => {
    return date?.slice(0, 4);
  };
  return (
    <Link to={"/en/watch/movie/"+item.id+"/"+item?.title?.replace(/\s+/g, '-').toLowerCase()+"-"+getYear(item.release_date)}>
    <div className="poster">
      <img
        alt={item.title}
        src={"https://image.tmdb.org/t/p/w780" + item.poster_path}
        className="poster-image"
      />
      <div className="poster-detail">
        <p className="poster-title">
          {type === "movie" ? item.title : item.name}
        </p>
        <p className="poster-year">
          {type === "movie"
            ? getYear(item.release_date)
            : getYear(item.first_air_date)}
        </p>
      </div>
    </div>
    </Link>
  );
}

