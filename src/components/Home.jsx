import React, { useEffect } from "react";
import "../styles/Home.css";
import About from "../components/About";
import Clients from "../components/Clients";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Teams from "../components/Teams";
import { BsArrowDownCircle } from "react-icons/bs";
import Contact from "./Contact";
import HarvisVdo from "../resources/Harvis.mp4";

const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.querySelector(".home_body").scrollHeight
      ) {
        document.querySelector(".Nav_body").classList.add("white_bg");
        document.querySelector(".nav_item a").classList.add("white_bg_text");

        console.log("oh yes");
      } else {
        document.querySelector(".Nav_body").classList.remove("white_bg");
      }
    });
  });
  return (
    <>
      <div className="home_body">
        <video autoPlay loop muted id="page_vdo">
          <source src={HarvisVdo} type="video/mp4" />
        </video>
        <div className="banner_gradient"></div>

        <div className="home_headline">Lorem ipsum dolor sit amet.</div>
        <div className="home_btn btn_know_more">Know More</div>
        <div className="home_down_arr">
          <a href="#about">
            <BsArrowDownCircle />
          </a>
        </div>
      </div>
      {/* sections */}
      <About />
      <Products />
      <Services />
      <Projects />
      <Teams />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
