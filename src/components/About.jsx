import "../styles/About.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";

import React from "react";

const About = () => {
  return (
    <section className="about_body" id="about">
      <div className="aboutus_section">
        <div className="about_component">
          <div>
            <div className="component_heading_bar"></div>
            <div className="component_title">About Us</div>
          </div>
          <p className="component_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div></div>
        <div className="about_image">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../resources/aboutus/aboutus.png")}
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../resources/aboutus/aboutus2.png")}
                alt="Second slide"
              />

              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../resources/aboutus/aboutus3.png")}
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>

          {/* <img src={require("../resources/aboutus/aboutus3.png")} alt="" /> */}
        </div>
      </div>
      <div className="vision_mission_section">
        <div className="vision_sec">
          <div className="about_component">
            <div>
              <div className="component_heading_bar"></div>
              <div className="component_title">Vision</div>
            </div>
            <p className="component_desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div></div>
        <div className="mission_sec">
          <div className="about_component">
            <div>
              <div className="component_heading_bar"></div>
              <div className="component_title">Mission</div>
            </div>
            <p className="component_desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
