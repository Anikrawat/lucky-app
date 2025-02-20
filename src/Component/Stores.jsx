import React from "react";
import "./Navbar.css";
import Footer from "./Footer";

const Stores = () => {
  return (
    <>
      <div className="stores-container">
        <div className="stores-content">
          <h1 className="stores-title">STORES</h1>
          <p className="stores-description">Find us in these fine stores:</p>
          <hr className="stores-divider" />
          <div className="stores-grid">
            <div className="store-card">
              <h2 className="store-name">The Blues</h2>
              <p className="store-address">
                500 Terry Francine Street
                <br />
                San Francisco, CA 94158
                <br />
                Phone: 123.456.7890
              </p>
              <p className="store-hours">
                Mon-Sat: 10:00am-7:00pm
                <br />
                Sunday: Closed
              </p>
            </div>
            <div className="store-card">
              <h2 className="store-name">Eva</h2>
              <p className="store-address">
                500 Terry Francine Street
                <br />
                San Francisco, CA 94158
                <br />
                Phone: 123.456.7890
              </p>
              <p className="store-hours">
                Mon-Fri: 9:00am-6:00pm
                <br />
                Sat-Sun: 10:00am-5:00pm
              </p>
            </div>
            <div className="store-card">
              <h2 className="store-name">City Center</h2>
              <p className="store-address">
                500 Terry Francine Street
                <br />
                San Francisco, CA 94158
                <br />
                Phone: 123.456.7890
              </p>
              <p className="store-hours">
                Mon-Sat: 10:00am-7:00pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Stores;
