import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    filterNote: ""
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    filterNote: (state, action) => {
      state.filterNote = action.payload;
    }
  }
});

export const { addNote, filterNote } = notesSlice.actions;
export default notesSlice.reducer;
