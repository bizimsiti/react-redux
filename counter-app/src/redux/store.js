import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

// Provider store'u props olarak alıyor ve diğer componentlerde erişilebilir yapıyor.
//reducer ile state'in değerlerine ulaşıyoruz.
export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
