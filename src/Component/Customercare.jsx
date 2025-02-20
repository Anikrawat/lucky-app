import React, { useState } from "react";
import "./Customer.css";
import Footer from "./Footer";
import Lastone from "./Last";

function CustomerCare() {
  return (
    <>
    <div className="container">
      <div className="customer-care">
        <h2>Customer Care</h2>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <hr />

        <div className="contact-info">
          <p>Have any questions or concerns? We're always ready to help!</p>
          <p>
            Call us at <br /> 123-456-7890 <br /> or send us an email to: <br />{" "}
            info@mysite.com
          </p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <div className="input-group">
              <label>First Name *</label>
              <input type="text" name="firstName" required />
            </div>
            <div className="input-group">
              <label>Last Name *</label>
              <input type="text" name="lastName" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <label>Email *</label>
              <input type="email" name="email" required />
            </div>
            <div className="input-group">
              <label>Subject</label>
              <input type="text" name="subject" />
            </div>
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea name="message" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
    <Lastone/>
    <Footer/>
    </>
  );
}

export default CustomerCare;
