import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "http://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trilerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const playTrailer = (movie) => {
    console.log(movie);
    if (trilerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          console.log(1);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => alert(movie?.name+" trailer not fount.."));
    }
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => playTrailer(movie)}
            className={`row_poster ${isLargeRow && "large_poster"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={`${movie.name}`}
          />
        ))}
      </div>
      {trilerUrl && <YouTube videoId={trilerUrl} opts={opts} />}
    </div>
  );
}
export default Row;
