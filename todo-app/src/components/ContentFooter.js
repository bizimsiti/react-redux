import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeActiveFilter,
  clearCompleted,
  selectTodos
} from "../redux/todos/todosSlice";
function ContentFooter() {
  const todos = useSelector(selectTodos);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const todosLeft = todos.filter((item) => !item.completed).length;
  const dispatch = useDispatch();
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todosLeft}</strong>
        item{todosLeft > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <button
            href="/"
            className={activeFilter === "all" ? "selected" : null}
            onClick={() => dispatch(changeActiveFilter("all"))}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={activeFilter === "active" ? "selected" : null}
            onClick={() => dispatch(changeActiveFilter("active"))}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={activeFilter === "completed" ? "selected" : null}
            onClick={() => dispatch(changeActiveFilter("completed"))}
          >
            Completed
          </button>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
