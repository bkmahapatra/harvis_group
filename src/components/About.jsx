import "../styles/About.css";

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
          <img src="" alt="" />
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
