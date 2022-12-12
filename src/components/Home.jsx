import React, { useEffect } from "react";
import "../styles/Home.css";
import About from "../components/About";
import Clients from "../components/Clients";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Services from "../components/Services";
import { BsArrowDownCircle } from "react-icons/bs";
import Contact from "./Contact";
import BannerVdo from "../resources/harvis_banner.mp4";
import config from "../config.json";

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
        <video autoPlay loop muted id="vdo_file">
          <source src={BannerVdo} type="video/mp4" className="vdo" />
        </video>

        <div className="home_txt">
          <div className="home_headline">{config.home_section.home_title}</div>
          <div className="home_btn btn_know_more">
            <a href="#about">{config.home_section.home_btn_text}</a>
          </div>
          
        </div>

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
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
