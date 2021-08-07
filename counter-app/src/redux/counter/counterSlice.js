import { createSlice } from "@reduxjs/toolkit";
// state adı ilk değeri ve state'i güncelleyecek fonksiyonları tanımlıyoruz.
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    arttir: (store) => {
      store.value += 1;
    },
    azalt: (store) => {
      store.value -= 1;
    },
    miktarArttir: (store, actions) => {
      // store.value ile state'in o an ki değerini alıyoruz ve actions.payload ile fonksiyona geçen parametreyi yakalıyoruz
      store.value += Number(actions.payload);
      console.log(actions);
    }
  }
});

// dispatch ile kullanabilmek için fonksiyonları dışa aktarıyoruz.
export const { arttir, azalt, miktarArttir } = counterSlice.actions;
// store reducer' da kullanabilmek için dışa aktarıyoruz.
export default counterSlice.reducer;
