import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleMenuClick = () => {
    setNavbarOpen(true);
    document.body.classList.add("disabled");
  };

  const handleCancelClick = () => {
    setNavbarOpen(false);
    document.body.classList.remove("disabled");
  };

  return (
    <nav className={`navbar } ${navbarOpen ? "show" : ""}`}>
      <div className="logo">
        <Link to="/">Pixel Threads</Link>
      </div>
      <div className="content">
        <ul className={`menu-list ${navbarOpen ? "show" : ""}`}>
          <div className="icon cancel-btn" onClick={handleCancelClick}>
            <i className="fas fa-times"></i>
          </div>
          <li>
            <Link
              to="/shop"
              className="hover-underline"
              onClick={handleCancelClick}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/ShoppingCart"
              className="hover-underline"
              onClick={handleCancelClick}
            >
              Cart
            </Link>
          </li>

          <li>
            <Link
              to="/AboutUs"
              className="hover-underline"
              onClick={handleCancelClick}
            >
              About Us
            </Link>
          </li>
        </ul>
        <div
          className={`icon menu-btn ${navbarOpen ? "hide" : ""}`}
          onClick={handleMenuClick}
        >
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
