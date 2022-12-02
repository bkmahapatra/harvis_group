import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className="Nav_body">
        <div className="app_logo">
           <a href="/">HARVIS</a> 
        </div>
        <div className="nav_menu">
            <ul className="nav_items">
                <li className="nav_item"><a href="/">Home</a></li>
                <li className="nav_item"><a href="/">About Us</a></li>
                <li className="nav_item"><a href="/">Services</a></li>
                <li className="nav_item"><a href="/">Projects</a></li>
                <li className="nav_item"><a href="/">Our Team</a></li>
                <li className="nav_item"><a href="/">Contact Us</a></li> 
            </ul>
            <div className="get_quote_btn nav-btn">Get Quote</div>
        </div>
    </div>
  )
}

export default Navbar