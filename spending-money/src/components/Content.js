import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
function Content() {
  const products = useSelector((state) => state.spendMoney.items);
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
