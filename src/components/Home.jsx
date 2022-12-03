import React from "react";
import "../styles/Home.css";
import About from "../components/About";
import Clients from "../components/Clients";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Teams from "../components/Teams";
import { BsArrowDownCircle } from "react-icons/bs";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="home_body">
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
