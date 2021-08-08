import { createSlice } from "@reduxjs/toolkit";

import {
  addTodoAsync,
  getTodosAsync,
  toggleTodoAsync,
  deleteTodoAsync
} from "./services";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: "all",
    error: null,
    isLoading: false
  },
  reducers: {
    /*  toggle: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    }, */
    /* deleteTodo: (state, action) => {
      const id = action.payload;
      const item = state.items.filter((item) => item.id !== id);
      state.items = item;
    }, */
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
    },

    //toggle todo
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const { id, completed } = action.payload;
      console.log(action.payload);
      const index = state.items.findIndex((item) => item.id === id);
      state.items[index].completed = completed;
    },
    // delete todo
    [deleteTodoAsync.fulfilled]: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
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

export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
