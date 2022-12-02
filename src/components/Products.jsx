import React from "react";
import "../styles/Products.css";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="products_body section" id="products">
      <div className="section_header">
        <div>
          <div className="component_heading_bar"></div>
          <div className="component_title">Our Excellent Products</div>
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
      <div className="section_body section_body_multi ">
        <ProductCard
          title={"Bitumen"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <ProductCard
          title={"Emulsion"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <ProductCard
          title={"Steel"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <ProductCard
          title={"Cement"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <ProductCard
          title={"Oil"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <ProductCard
          title={"Petrolium"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
    </section>
  );
};

export default Products;
