import React from "react";
import "../styles/Services.css";
import ProductCard from "./ProductCard";
import config from "../config.json";

const Services = () => {
  return (
    <section className="services_body" id="services">
      <div className="section_header">
        <div>
          <div className="component_heading_bar"></div>
          <div className="component_title">{config.services_section.section_heading}</div>
        </div>
        <div></div>
        <p className="component_desc">
          {config.services_section.section_desc}
        </p>
      </div>
      <div className="section_body section_body_services">
        <ProductCard
          title={"Road Infra"}
          desc={
            "Our project execution expertise generally focuses on engineering projects involving road transportation, building and maintenance of roads, highways, flyovers, and bridges.  In the past, we have carried out infrastructure projects both individually and through joint ventures. In a variety of infrastructure segments, HARVIS has the capacity to bid, carry out, and construct medium and large-scale projects."
          }
          img={require("../resources/products/roadinfra.png")}
        />
      </div>
    </section>
  );
};

export default Services;
