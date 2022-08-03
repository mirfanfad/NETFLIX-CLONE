import React from "react";
import Banner from "../../components/featured/Banner";
import Footer from "../../components/footer/Footer";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner type="movies" />

      <List page={"1"} title={"Trending Now"} />
      <List page={"2"} title={"Popular"} />
      <List page={"3"} title={"New This Weeks"} />
      <List page={"4"} title={"Horror Movies"} />
      <List page={"5"} title={"Adventures Movies"} />

      <Footer />
    </div>
  );
}
