import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.css";

export default function List({ page, title }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [clickLimit] = useState(window.innerWidth / 230);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=929d591b0042ae477357e19820621452&language=en-US&page=" +
          page
      );
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const fetchGenre = async () => {
      const requestGenreMovie = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=929d591b0042ae477357e19820621452&language=en-US"
      );

      setGenres(requestGenreMovie.data.genres);
      return requestGenreMovie;
    };

    fetchGenre();
  }, []);

  return (
    <div className="list">
      <span className="listTitle">{title}</span>
      <div className="listWrapper">
        <ArrowBackIosOutlined
          className="sliderArrow sliderLeft"
          onClick={() => handleClick("left")}
          style={{ display: (!isMoved || slideNumber === 0) && "none" }}
        />
        <div className="listContainer" ref={listRef}>
          {movies.map((movie, i) => (
            <ListItem index={i} movie={movie} genres={genres} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow sliderRight"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
