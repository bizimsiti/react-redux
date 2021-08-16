import React from "react";

function Cart() {
  return (
    <div className="cart-container">
      <h1>Your Receipt</h1>
      <div className="cart-wrapper">
        <div className="cart-list">
          <div className="cart-item">
            <span>Monster Truck</span>
            <span>x1</span>
            <span className="price">₺150k</span>
          </div>
          <div className="line" />
        </div>
        <div className="total-price">
          <span>TOTAL</span>
          <span className="price">₺ 150,000</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
