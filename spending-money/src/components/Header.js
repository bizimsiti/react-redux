import React from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";
function Header() {
  const totalMoney = useSelector((state) => state.spendMoney.totalMoney);
  const totalFee = useSelector((state) => state.spendMoney.totalFee);
  return (
    <>
      <div className="header-container">
        <div className="img-container">
          <img src="images/ali-koc.jpg" alt="" />
        </div>
      </div>
      <div className="money">
        <h1>${totalMoney - totalFee}</h1>
      </div>
    </>
  );
}

export default Header;
