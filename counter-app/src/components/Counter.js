import { useState } from "react";
// useSelector store içindeki reducer alanına erişir.
// useDispatch state'i günceleyecek olan fonksiyonları parametre olarak geçiyoruz.
import { useSelector, useDispatch } from "react-redux";
import { arttir, azalt, miktarArttir } from "../redux/counter/counterSlice";
function Counter() {
  const [amount, setAmount] = useState(0);
  const countValue = useSelector((state) => state.counter.value);
  //console.log();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(arttir())}>Arttır</button>
      <button onClick={() => dispatch(azalt())}>Azalt</button>
      <br />
      <br />
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(miktarArttir(amount))}>
        {amount} arttır
      </button>
    </div>
  );
}

export default Counter;
