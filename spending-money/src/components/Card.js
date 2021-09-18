//import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  multipleIncrementProduct,
  incrementProduct,
  decrementProduct
} from "../redux/spendMoneySlice";

function Card({ product }) {
  const totalMoney = useSelector((state) => state.spendMoney.totalMoney);
  const totalFee = useSelector((state) => state.spendMoney.totalFee);
  const dispatch = useDispatch();
  return (
    <div className="product-list-item-container">
      <img src={product.img} alt="" />
      <div className="product-list-item-name">{product.name}</div>
      <div className="product-list-item-price">₺{product.price}</div>
      <div className="item-controls">
        <button
          className="sell-btn"
          disabled={product.amount === 0 ? true : false}
          onClick={() => dispatch(decrementProduct(product.id))}
        >
          Sell
        </button>
        <input
          min="0"
          type="number"
          value={product.amount}
          disabled={totalMoney - totalFee < totalFee ? true : false}
          onChange={(e) =>
            dispatch(
              multipleIncrementProduct({
                id: product.id,
                value: Number(e.target.value)
              })
            )
          }
        />
        <button
          className="buy-btn"
          onClick={() => dispatch(incrementProduct(product.id))}
          disabled={totalMoney - totalFee < totalFee ? true : false}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Card;
