import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./listItem.css";

export default function ListItem({ movie, index, genres }) {
  const [isHovered, setIsHovered] = useState(false);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title || movie?.name}
        className="listItemImg"
      />
      <div className="itemInfo">
        <div className="itemInfoIcons">
          <PlayArrow className="itemInfoIcon" />
          <Add className="itemInfoIcon" />
          <ThumbUpAltOutlined className="itemInfoIcon" />
          <ThumbDownAltOutlined className="itemInfoIcon" />
        </div>
        <div className="itemInfoTop">
          <span className="itemInfoTitle">
            {truncateString(movie?.title || movie?.name, 20)}
          </span>
          <span className="itemInfoLimit">
            {movie?.adult === false ? "+16" : "+21"}
          </span>
          <span className="itemInfoYear">
            {(movie?.release_date || movie?.first_air_date).substring(0, 4)}
          </span>
        </div>
        <div className="itemInfoDesc">
          {truncateString(movie?.overview, 120)}
        </div>
        <div className="itemInfoGenres">
          {movie?.genre_ids.map((id) => {
            const genre = genres.find((o) => o.id === id);
            if (genre) {
              return <span className="ItemInfoGenre">{genre?.name}</span>;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
