import { createSlice } from "@reduxjs/toolkit";
import cardData from "./data";
const randomizeCards = (arr) => {
  const duplicatedarr = [...arr, ...arr].map((item, id) => ({ id, ...item }));
  for (let i = duplicatedarr.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * i + 1);
    [duplicatedarr[randomIndex], duplicatedarr[i]] = [
      duplicatedarr[i],
      duplicatedarr[randomIndex]
    ];
  }
  return duplicatedarr;
};

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    randomizedItems: randomizeCards(cardData),
    openedItems: [],
    score: 100
  },
  reducers: {
    openCard: (state, action) => {
      const filteredCard = state.randomizedItems.find(
        (item) => item.id === action.payload
      );
      state.openedItems.push(filteredCard);
      filteredCard.close = false;
    },
    checkCard: (state, action) => {
      if (
        state.openedItems[0].name === state.openedItems[1].name &&
        state.openedItems[0].id !== state.openedItems[1].id
      ) {
        const firstFilteredCard = state.randomizedItems.find(
          (item) => item.id === state.openedItems[0].id
        );
        const secondFilteredCard = state.randomizedItems.find(
          (item) => item.id === state.openedItems[1].id
        );
        firstFilteredCard.completed = secondFilteredCard.completed = true;
        state.score += 50;
        state.openedItems = [];
      } else {
        const firstFilteredCard = state.randomizedItems.find(
          (item) => item.id === state.openedItems[0].id
        );
        const secondFilteredCard = state.randomizedItems.find(
          (item) => item.id === state.openedItems[1].id
        );
        firstFilteredCard.close = secondFilteredCard.close = true;
        if (state.openedItems[0].id !== state.openedItems[1].id) {
          state.score -= 10;
        }
        state.openedItems = [];
      }
    },
    initGame: (state) => {
      state.randomizedItems.map((item) => (item.close = true));
    },
    startGame: (state, action) => {
      state.randomizedItems = randomizeCards(cardData);
      state.score = 30;
    }
  }
});
export const { openCard, checkCard, startGame, initGame } = cardSlice.actions;
export default cardSlice.reducer;
