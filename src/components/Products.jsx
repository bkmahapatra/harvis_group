import React from "react";
import "../styles/Products.css";
import ProductCard from "./ProductCard";
import config from "../config.json";

const Products = () => {
  return (
    <section className="products_body section" id="products">
      <div className="section_header">
        <div>
          <div className="component_heading_bar"></div>
          <div className="component_title">{config.product_section.section_heading}</div>
        </div>
        <div></div>
        <p className="component_desc">
        {config.product_section.section_desc}
        </p>
      </div>
      <div className="section_body section_body_multi ">
        <ProductCard
          title={"Bitumen"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          img={require("../resources/products/bitumen.png")}
        />
        <ProductCard
          title={"Emulsion"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          img={require("../resources/products/emulsion.png")}
        />
        <ProductCard
          title={"Steel"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          img={require("../resources/products/steel.png")}
        />
        <ProductCard
          title={"Cement"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          img={require("../resources/products/cement.png")}
        />
        <ProductCard
          title={"Oil"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          img={require("../resources/products/oil.png")}
        />
        <ProductCard
          title={"Petrolium"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          img={require("../resources/products/petroleum.png")}
        />
      </div>
    </section>
  );
};

export default Products;
