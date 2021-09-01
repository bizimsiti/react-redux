import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const totalMoney = useSelector((state) => state.spendMoney.remainingMoney);
  return (
    <>
      <div className="header-container">
        <div className="img-container">
          <img src="images/ali-koc.jpg" alt="" />
        </div>
      </div>
      <div className="money">
        <h1>₺{totalMoney}</h1>
      </div>
    </>
  );
}

export default Header;
