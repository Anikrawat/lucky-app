import React, { useState } from 'react';
import "./Navbar.css";
import Footer from './Footer';

function Sale() {
  const products = [
      {
        id: 1,
        title: "I'm a Product",
        oldPrice: 19.99,
        newPrice: 14.99,
        imageUrl: "/src/assets/1.jpg",
        badge: "Sale",
      },


      {
        id: 5,
        title: "women's sandals",
        oldPrice: null,
        newPrice: 59.0,
        imageUrl: "/src/assets/5.jpg",
        badge: "Sale",
      },


      {
        id: 8,
        title: "leather handbag",
        oldPrice: null,
        newPrice: 19.0,
        imageUrl: "/src/assets/second.jpg",
        badge: "Sale",
      },



      {
        id: 13,
        title: "I'm a Blazer",
        oldPrice: null,
        newPrice: 50.0,
        imageUrl: "/src/assets/seven.jpg",
        badge: "Sale",
      },


      {
        id: 16,
        title: "I'm a handbag",
        oldPrice: null,
        newPrice: 69.0,
        imageUrl: "/src/assets/ten.png",
        badge: "sale",
      },
    ];
  
    const [sortOption, setSortOption] = useState("Recommended");
    const [sortedProducts, setSortedProducts] = useState(products);
  
    // Handle sorting
    const handleSortChange = (option) => {
      setSortOption(option);
      let sortedArray = [...products];
  
      switch (option) {
        case "Newest":
          // Assuming newest is based on product ID (could be dynamic date if provided)
          sortedArray.sort((a, b) => b.id - a.id);
          break;
        case "Price (low to high)":
          sortedArray.sort((a, b) => a.newPrice - b.newPrice);
          break;
        case "Price (high to low)":
          sortedArray.sort((a, b) => b.newPrice - a.newPrice);
          break;
        case "Name A-Z":
          sortedArray.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Name Z-A":
          sortedArray.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          sortedArray = products;
          break;
      }
  
      setSortedProducts(sortedArray);
    };
  
    return (
      <>
        <div className="container">
          <h1 className="title">All Products</h1>
          <p className="description">
            This is your category description. It's a great place to tell
            customers what this category is
            <br /> about, connect with your audience, and draw attention to your
            products.
          </p>
  
          <div className="sort-container">
            <span className="product-count">
              {sortedProducts.length} products
            </span>
            <div className="sort-dropdown">
              <button className="sort-button">
                Sort by: {sortOption}
                <i className="arrow-icon">▼</i>
              </button>
              <ul className="sort-options">
                <li onClick={() => handleSortChange("Recommended")}>
                  Recommended
                </li>
                <li onClick={() => handleSortChange("Newest")}>Newest</li>
                <li onClick={() => handleSortChange("Price (low to high)")}>
                  Price (low to high)
                </li>
                <li onClick={() => handleSortChange("Price (high to low)")}>
                  Price (high to low)
                </li>
                <li onClick={() => handleSortChange("Name A-Z")}>Name A-Z</li>
                <li onClick={() => handleSortChange("Name Z-A")}>Name Z-A</li>
              </ul>
            </div>
          </div>
  
          <div className="product-grid">
            {sortedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="image-container">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="product-image"
                  />
                  {product.badge && (
                    <span
                      className={`badge ${product.badge
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
                <h2 className="product-title">{product.title}</h2>
                {product.oldPrice !== null && (
                  <p className="product-price old-price">
                    ${product.oldPrice.toFixed(2)}
                  </p>
                )}
                <p className="product-price new-price">
                  ${product.newPrice.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
        </>
    );
}

export default Sale;