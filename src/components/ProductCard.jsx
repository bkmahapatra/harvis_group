import React from "react";
import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

const ProductCard = (props) => {
  return (
    <div className="card_body">
      <div className="img">
        <img className="card_image" src={props.img} alt="" />
      </div>
      <div>
        <h3 className="card_title">{props.title}</h3>
        <p className="card_desc">{props.desc}</p>
      </div>
      <div className="card_readmore">
        <Link to={props.title.toLowerCase()} className="readmore_links">
          Read More <BsArrowRightCircle className="readmore_icon" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
