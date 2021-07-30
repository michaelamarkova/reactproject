import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Happy Honey
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times-circle" : "fa fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          <Link to="/login">
            {button && <Button>LOGIN</Button>}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
