import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./banner.css";

export default function Banner({ type }) {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=929d591b0042ae477357e19820621452&language=en-US"
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    };

    const fetchGenre = async () => {
      const requestGenreMovie = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=929d591b0042ae477357e19820621452&language=en-US"
      );

      setGenres(requestGenreMovie.data.genres);
      return requestGenreMovie;
    };

    fetchGenre();
    fetchData();
  }, []);

  return (
    <div className="banner">
      {type && (
        <div className="category">
          <span className="type">{type === "movies" ? "Movies" : "Series"}</span>
          <select className="select" name="genre" id="genre">
            <option>Genre</option>
            {genres?.map((genre) => (
              <option value={genre?.id}>{genre?.name}</option>
            ))}
          </select>
        </div>
      )}
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt=""
        className="bannerImg"
      />
      <div className="info">
        <h1 className="infoTitle">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <span className="desc">{truncateString(movie?.overview, 200)}</span>
        <div className="buttons">
          <button className="infoButton play">
            <PlayArrow />
            <span className="buttonText">Play</span>
          </button>
          <button className="infoButton more">
            <InfoOutlined />
            <span className="buttonText">Info</span>
          </button>
        </div>
      </div>
      <div className="bannerFadeBottom" />
    </div>
  );
}
