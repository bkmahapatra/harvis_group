import React from "react";
import "../styles/Services.css";
import ProductCard from "./ProductCard";

const Services = () => {
  return (
    <section className="services_body" id="services">
      <div className="section_header">
        <div>
          <div className="component_heading_bar"></div>
          <div className="component_title">Our Mesmerizing Service</div>
        </div>
        <div></div>
        <p className="component_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
        </p>
      </div>
      <div className="section_body section_body_multi">
        <ProductCard
          title={"Road Infra"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
    </section>
  );
};

export default Services;
