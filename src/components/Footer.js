import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <h2>Happy Honey</h2>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join our newsletter!</p>
        <p className="footer-subscription-text">
          You will get notififed of new articles and receive discounts at our
          partners stores.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            {<Button>Subscribe</Button>}
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to="/aboutus">About us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
           <Link to="/">Careers</Link>
           <Link to="/">Newsletter</Link>
          </div>
        </div>
      </div>
      <div>
        <small class="website-rights">
          Happy Honey © 2021, designed by Michaela Markova
        </small>
      </div>
    </div>
  );
}

export default Footer;
