import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProductNavbar.css'

const ProductNavbar = () => {
  return (
    <div className="product_navbar">
        <ul className="pro_nav_items">
            <li className="pro_nav_item"><Link to={"/bitumen"}>Bitumen</Link></li>
            <li className="pro_nav_item"><Link to={"/emulsion"}>Emulsion</Link></li>
            <li className="pro_nav_item"><Link to={"/steel"}>Steel</Link></li>
            <li className="pro_nav_item"><Link to={"/cement"}>Cement</Link></li>
            <li className="pro_nav_item"><Link to={"/oil"}>Oil</Link></li>
            <li className="pro_nav_item"><Link to={"/petrolium"}>Petrolium</Link></li>
        </ul>
    </div>
  )
}

export default ProductNavbar