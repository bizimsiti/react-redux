import { createSlice } from "@reduxjs/toolkit";
import products from "../constants/index";

const spendMoneySlice = createSlice({
  name: "money",
  initialState: {
    items: products,
    totalMoney: 10000000000,
    cartItems: [],
    totalFee: 0
  },
  reducers: {
    multipleIncrementProduct: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      product.amount = action.payload.value;
      product.totalPrice = product.amount * product.price;
      state.totalFee = product.totalPrice;
    },
    incrementProduct: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      product.amount += 1;
      product.totalPrice = product.amount * product.price;
      state.totalFee += product.price;
    },
    decrementProduct: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      product.amount -= 1;
      product.totalPrice = product.amount * product.price;
      state.totalFee -= product.price;
    },
    totalFee: (state, action) => {
      const productTotalPrice = state.items.reduce((prev, curr) => {
        return prev + curr.totalPrice;
      }, 0);
      state.totalFee = productTotalPrice;
    }
  }
});
export default spendMoneySlice.reducer;
export const {
  multipleIncrementProduct,
  incrementProduct,
  decrementProduct,
  totalPrice,
  totalFee
} = spendMoneySlice.actions;
