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
          desc={config.products.bitumen.product_desc}
          img={require("../resources/products/bitumen.png")}
        />
        <ProductCard
          title={"Emulsion"}
          desc={config.products.emulsion.product_desc}
          img={require("../resources/products/emulsion.png")}
        />
        <ProductCard
          title={"Steel"}
          desc={config.products.steel.product_desc}

          img={require("../resources/products/steel.png")}
        />
        <ProductCard
          title={"Cement"}
          desc={config.products.cement.product_desc}

          img={require("../resources/products/cement.png")}
        />
        <ProductCard
          title={"Oil"}
          desc={config.products.oil.product_desc}

          img={require("../resources/products/oil.png")}
        />
        <ProductCard
          title={"Petrolium"}
          desc={config.products.petrolium.product_desc}

          img={require("../resources/products/petroleum.png")}
        />
      </div>
    </section>
  );
};

export default Products;
