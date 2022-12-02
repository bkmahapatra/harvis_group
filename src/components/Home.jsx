import React from "react";
import "../styles/Home.css";
import { BsArrowDownCircle } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home_body">
      <div className="home_headline">Lorem ipsum dolor sit amet.</div>
      <div className="home_btn btn_know_more">Know More</div>
      <div className="home_down_arr">
        <a href="#about">
          <BsArrowDownCircle />
        </a>
      </div>
    </div>
  );
};

export default Home;
