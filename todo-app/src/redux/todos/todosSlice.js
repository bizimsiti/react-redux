import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        todo: "deneme",
        completed: false
      }
    ],
    activeFilter: "all"
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ todo }) => {
        return {
          payload: {
            id: nanoid(),
            todo,
            completed: false
          }
        };
      }
    },
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

export const {
  addTodo,
  toggle,
  deleteTodo,
  changeActiveFilter,
  clearCompleted
} = todosSlice.actions;
export default todosSlice.reducer;
