import React from "react";
import '../styles/ProductCard.css'
import { BsArrowRightCircle } from "react-icons/bs";

const ProductCard = (props) => {
  return (
    <div className="card_body">
      <div className="img">
        <img className="card_image" src={props.img} alt="" />
      </div>
      <h3 className="card_title">{props.title}</h3>
      <p className="card_desc">{props.desc}</p>
      <div className="card_readmore">
        Read More <BsArrowRightCircle className="readmore_icon"/>
      </div>
    </div>
  );
};

export default ProductCard;
