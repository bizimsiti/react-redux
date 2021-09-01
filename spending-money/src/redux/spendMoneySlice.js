import { createSlice } from "@reduxjs/toolkit";

const spendMoneySlice = createSlice({
  name: "money",
  initialState: {
    totalMoney: 10000000000,
    remainingMoney: 10000000000
  },
  reducers: {
    buyProduct: (store, actions) => {
      store.remainingMoney = store.totalMoney - actions.payload;
    }
  }
});
export default spendMoneySlice.reducer;
export const { buyProduct } = spendMoneySlice.actions;
