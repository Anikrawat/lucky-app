import React from "react";
import "./Middle.css";
import { Link } from "react-router-dom";

function Middle() {
  const bestSellers = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&auto=format&fit=crop&q=60",
      label: "Best Seller",
      title: "White Blazer Set",
      price: "$129.99",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&auto=format&fit=crop&q=60",
      label: "Best Seller",
      title: "Leather Tote Bag",
      price: "$89.99",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&auto=format&fit=crop&q=60",
      label: "Best Seller",
      title: "Striped Dress",
      price: "$79.99",
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>OUR BEST SELLERS</h1>
        <p>Don't Miss Out</p>
      </header>

      <div className="products-grid">
        {bestSellers.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.title} />
              <span className="label">{product.label}</span>
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="shop-button-container">
        <Link to="/all-products" className="shop-button">
          Shop Best Sellers
        </Link>
      </div>
    </div>
  );
}

export default Middle;
