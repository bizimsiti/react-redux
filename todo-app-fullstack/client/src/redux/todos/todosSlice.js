import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
    return await res.data;
  }
);
export const addTodoAsync = createAsyncThunk(
  "todos/addTodosAsync",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`,
      data
    );
    return await res.data;
  }
);
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: "all",
    error: null,
    isLoading: false
  },
  reducers: {
    toggle: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const item = state.items.filter((item) => item.id !== id);
      state.items = item;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
    }
  },
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log("ok");
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    },

    //add todo
    [addTodoAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    }
  }
});

export const selectTodos = (state) => state.todos.items;

export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  } else {
    return state.todos.items.filter((item) =>
      state.todos.activeFilter === "active"
        ? item.completed === false
        : item.completed === true
    );
  }
};

export const { toggle, deleteTodo, changeActiveFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
