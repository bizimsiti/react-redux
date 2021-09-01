import React from "react";
import products from "../constants/index";
import Card from "./Card";
function Content() {
  return (
    <div className="content-container">
      <div className="product-list">
        {products.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Content;
