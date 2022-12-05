import '../styles/Navbar.css'
import {useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';
import {Link} from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className="Nav_body">
        <div className="app_logo">
           <a href="/">HARVIS</a> 
        </div>
        <div className="nav_menu">
            <ul className="nav_items">
                <li className="nav_item"><Link to="/">Home</Link></li>
                {/* <li className="nav_item"><a href="/#about">About Us</a></li> */}
                <li className="nav_item"><HashLink to="/#about">About Us</HashLink></li>
                <li className="nav_item"><HashLink to="/#products">Products</HashLink></li>
                <li className="nav_item"><HashLink to="/#services">Services</HashLink></li>
                <li className="nav_item"><HashLink to="/#projects">Projects</HashLink></li>
                <li className="nav_item"><HashLink to="/#teams">Our Team</HashLink></li>
                <li className="nav_item"><HashLink to="/#contact">Contact Us</HashLink></li> 
            </ul>
            <Link className="get_quote_btn nav-btn" to={'/getquote'}>Get Quote</Link>
            {/* <div ></div> */}
        </div>
    </div>
  )
}

export default Navbar