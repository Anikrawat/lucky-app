import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag, Heart, Search, User } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="announcement-bar">
        <p>FREE SHIPPING WORLDWIDE</p>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className={`nav-links ${isOpen ? "active" : ""}`}>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Shop
              </NavLink>
              <NavLink
                to="/sale"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sale
              </NavLink>
              <NavLink
                to="/care"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Customer Care
              </NavLink>
              <NavLink
                to="/stores"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Stores
              </NavLink>
            </div>
          </div>

          <div className="nav-center">
            <NavLink to="/" className="logo">
              PRETTY GAL
            </NavLink>
          </div>

          <div className="nav-right">
            <div className="nav-icons">
              <button>
                <Search size={20} />
              </button>
              <button>
                <User size={20} />
              </button>
              <button>
                <Heart size={20} />
              </button>
              <button className="cart-button">
                <ShoppingBag size={20} />
                <span className="cart-count">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
