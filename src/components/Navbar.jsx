import '../styles/Navbar.css'
import {useEffect} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className="Nav_body">
        <div className="app_logo">
           <a href="/">HARVIS</a> 
        </div>
        <div className="nav_menu">
            <ul className="nav_items">
                <li className="nav_item"><a href="/">Home</a></li>
                <li className="nav_item"><a href="/#about">About Us</a></li>
                <li className="nav_item"><a href="#products">Products</a></li>
                <li className="nav_item"><a href="#services">Services</a></li>
                <li className="nav_item"><a href="#projects">Projects</a></li>
                <li className="nav_item"><a href="#teams">Our Team</a></li>
                <li className="nav_item"><a href="#contact">Contact Us</a></li> 
            </ul>
            <Link className="get_quote_btn nav-btn" to={'/getquote'}>Get Quote</Link>
            {/* <div ></div> */}
        </div>
    </div>
  )
}

export default Navbar