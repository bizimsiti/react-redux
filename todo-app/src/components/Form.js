import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";
function Form() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      dispatch(addTodo({ id: nanoid(), title: todo, completed: false }));
    }
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
}

export default Form;
