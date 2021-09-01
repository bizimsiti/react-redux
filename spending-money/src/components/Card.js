import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  buyProduct,
  sellProduct,
  remainingMoney
} from "../redux/spendMoneySlice";

function Card({ product }) {
  const totalMoney = useSelector((state) => state.spendMoney.totalMoney);
  const [productCount, setProductCount] = useState(0);
  const dispatch = useDispatch();
  const totalPrice = productCount * product.price;

  const incrementProduct = () => {
    setProductCount(productCount + 1);
  };
  const decrementProduct = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };
  useEffect(() => {
    dispatch(buyProduct(totalPrice));
  }, [dispatch, totalPrice]);
  return (
    <div className="product-list-item-container">
      <img src={product.img} alt="" />
      <div className="product-list-item-name">{product.name}</div>
      <div className="product-list-item-price">₺{product.price}</div>
      <div className="item-controls">
        <button
          className="sell-btn"
          onClick={() => decrementProduct()}
          disabled={productCount === 0 ? true : false}
        >
          Sell
        </button>
        <input
          min="0"
          type="number"
          value={productCount}
          onChange={(e) => setProductCount(Number(e.target.value))}
        />
        <button
          className="buy-btn"
          disabled={totalMoney < productCount * product.price ? true : false}
          onClick={() => incrementProduct()}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Card;
