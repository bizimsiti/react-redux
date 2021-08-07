import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, deleteTodo } from "../redux/todos/todosSlice";
function TodoList() {
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();
  let filtered = items;
  const handleDelete = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteTodo(id));
    }
  };
  if (activeFilter !== "all") {
    filtered = items.filter((item) =>
      activeFilter === "active"
        ? item.completed === false
        : item.completed === true
    );
  }

  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle(item.id))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDelete(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
