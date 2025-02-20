import React from "react";
import "./Middle.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Allproducts() {
  const allProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&auto=format&fit=crop&q=60",
      title: "White Blazer Set",
      price: "$129.99",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&auto=format&fit=crop&q=60",
      title: "Leather Tote Bag",
      price: "$89.99",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&auto=format&fit=crop&q=60",
      title: "Striped Dress",
      price: "$79.99",
    },
    // Additional products
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&auto=format&fit=crop&q=60",
      title: "Summer Dress",
      price: "$69.99",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60",
      title: "Casual Blazer",
      price: "$99.99",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=800&auto=format&fit=crop&q=60",
      title: "Designer Bag",
      price: "$159.99",
    },
  ];

  return (
    <>
      <div className="container">
        <header>
          <h1>ALL PRODUCTS</h1>
          <p>Explore Our Collection</p>
          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </header>

        <div className="products-grid">
          {allProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
   
  );
}

export default Allproducts;
