import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./requests";
import './banner.css'
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(request.data.results[Math.floor(Math.random() * 15)]);
      //   console.log(request.data.results[Math.floor(Math.random() * 15)]);
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name}</h1>
        <div className="banner_btns">
            <button className="banner_btn">play</button>
            <button className="banner_btn">My List</button>
        </div>
        <p className="movie_decsription">{movie.overview}</p>
      </div>
      <div className="fad_shadow"/>
    
    </header>
  );
}

export default Banner;
