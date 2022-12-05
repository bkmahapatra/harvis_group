import "../styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import config from "../config.json";

import React from "react";

const About = () => {
  return (
    <section className="about_body" id="about">
      <div className="aboutus_section">
        <div className="about_component">
          <div>
            <div className="component_heading_bar"></div>
            <div className="component_title">
              {config.about_section.section_heading}
            </div>
          </div>
          <p className="component_desc">{config.about_section.section_desc}</p>
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
            <p className="component_desc">{config.about_section.vision}</p>
          </div>
        </div>
        <div></div>
        <div className="mission_sec">
          <div className="about_component">
            <div>
              <div className="component_heading_bar"></div>
              <div className="component_title">Mission</div>
            </div>
            <p className="component_desc">{config.about_section.mission}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
