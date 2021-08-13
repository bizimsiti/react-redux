import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes = createAsyncThunk("quotes/fetchAll", async () => {
  const res = await axios(`https://www.breakingbadapi.com/api/quotes`);
  console.log(res);
  return res.data;
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle"
  },
  reducers: {},
  extraReducers: {
    [fetchQuotes.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchQuotes.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  }
});

export default quotesSlice.reducer;
