import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
function Form() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      dispatch(addTodo({ todo }));
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
