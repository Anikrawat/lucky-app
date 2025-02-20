import React from 'react';
import "./Middle.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>OUR STORE</h3>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Customer Care</a></li>
            <li><a href="#">Stores</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>TERMS & CONDITIONS</h3>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Accessibility Statement</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>NEED ASSISTANCE?</h3>
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>

        <div className="footer-section">
          <h3>BE OUR FRIEND</h3>
          <div className="newsletter">
            <input type="email" placeholder="Enter Your Email Here" />
            <button className="subscribe-button">Subscribe Now</button>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 PRETTY GAL. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;