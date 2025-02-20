import React from "react";
import "./Navbar.css";
import Middle from "./Middle";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div className="customer-care-container">
        <div className="banner">
          <img
            src="/assets/my_girl.png" // Adjusted image source path if needed
            alt="New Collection"
            className="banner-image"
          />
          <div className="banner-content">
            <h2 className="banner-title">NEW</h2>
            <h3 className="banner-subtitle">COLLECTION</h3>
            <button className="shop-now">Shop Now</button>
          </div>
        </div>
      </div>
      <Middle />
      <Footer/>
    </div>
  );
}

export default Home;
