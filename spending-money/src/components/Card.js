import React from "react";

function Card({ product }) {
  return (
    <div className="product-list-item-container">
      <img src={product.img} alt="" srcset="" />
      <div className="product-list-item-name">{product.name}</div>
      <div className="product-list-item-price">₺{product.price}</div>
      <div className="item-controls">
        <button className="sell-btn">Sell</button>
        <input min="0" type="number" defaultValue="0" />
        <button className="buy-btn">Buy</button>
      </div>
    </div>
  );
}

export default Card;
