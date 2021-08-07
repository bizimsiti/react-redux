import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggle,
  deleteTodo,
  selectFilteredTodos
} from "../redux/todos/todosSlice";
function TodoList() {
  /*const items = useSelector((state) => state.todos.items);
  -->selector kullanımı
  const items = useSelector(selectTodos);
  */
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteTodo(id));
    }
  };
  /* 
  if (activeFilter !== "all") {
    filtered = items.filter((item) =>
      activeFilter === "active"
        ? item.completed === false
        : item.completed === true
    );
  }
  */

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle(item.id))}
            />
            <label>{item.todo}</label>
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
