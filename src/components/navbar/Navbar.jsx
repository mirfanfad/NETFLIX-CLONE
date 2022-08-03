import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleClick = () => {
    console.log("test");
    axios
      .get("http://scorpiopy.herokuapp.com/api/Account/WhoAmI")
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className={`navbar ${isScrolled && "scrolled"}`}>
      <div className="container">
        <div className="navbarLeft">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
            className="logoImg"
          />
          <span className="navbarMenu">Homepage</span>
          <span className="navbarMenu">Series</span>
          <span className="navbarMenu">Movies</span>
          <span className="navbarMenu">New and Popular</span>
          <span className="navbarMenu">My List</span>
        </div>
        <div className="navbarRight">
          <Search className="navbarIcon" />
          <span>KIDS</span>
          <Notifications className="navbarIcon" />
          <img
            className="profileImg"
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt=""
            onClick={() => handleClick()}
          />
          <div className="profile">
            <ArrowDropDown className="navbarIcon" />
            <div className="options">
              <span className="optionMenu">Settings</span>
              <span className="optionMenu">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
