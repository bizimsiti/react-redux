import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { totalFee } from "../redux/spendMoneySlice";
function Cart() {
  const products = useSelector((state) => state.spendMoney.items);
  const totalProductPrice = useSelector((state) => state.spendMoney.totalFee);
  const dispatch = useDispatch();
  console.log("cart-rendered");
  dispatch(totalFee());
  return (
    <div className="cart-container">
      <h1>Your Receipt</h1>
      <div className="cart-wrapper">
        <div className="cart-list">
          {products.map((product) => {
            if (product.totalPrice > 0) {
              return (
                <div key={product.id} className="cart-item">
                  <div className="cart-item-name">{product.name}</div>
                  <div>x{product.amount}</div>
                  <div className="price">₺{product.totalPrice}</div>
                </div>
              );
            }
            return null;
          })}

          <div className="line" />
        </div>
        <div className="total-price">
          <span>TOTAL</span>
          <span className="price">${totalProductPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
