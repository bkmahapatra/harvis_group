import "../styles/ProductsPage.css";

const ProductsPage = ({ product }) => {
  setInterval(() => {
    document.querySelector(".Nav_body").classList.add("white_bg");
  }, 1000);

  return (
    <section className="product_page_body" id={product.product_name}>
      <div className="section_header">
        <div className="section_inner_header">
          <div>
            <div className="component_heading_bar"></div>
            <div className="component_title">{product.product_name}</div>
          </div>
          <div></div>
          <p className="component_desc">{product.product_desc}</p>
        </div>
        <div></div>
        <div className="header_image">
          {console.log(typeof product.product_image)}
          <img src={require("../resources/products/bitumen.png")} alt="" />
      
        </div>
      </div>
      <div className="pp_section_body">
        {product.sub_products.map((item) => {
          return (
            <div className="item_detail">
              <div className="item_sec1">
                <div className="item_image">
                  <img src={require("../resources/products/bitumen.png")} alt="" />
                </div>
                <div></div>
                <div className="item_text">
                  <div className="item_title">{item.sub_product_title}</div>
                  <div className="item_desc">{item.sub_product_desc1}</div>
                </div>
              </div>
              <div className="item_sec2">
                <div className="sec2_text">{item.sub_product_desc2}</div>
                <div></div>
                <div className="sec2_image">
                  <img src={require("../resources/products/bitumen.png")} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsPage;
