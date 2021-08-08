import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredTodos } from "../redux/todos/todosSlice";
import {
  getTodosAsync,
  toggleTodoAsync,
  deleteTodoAsync
} from "../redux/todos/services";
function TodoList() {
  /*const items = useSelector((state) => state.todos.items);
  -->selector kullanımı
  const items = useSelector(selectTodos);
  */
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure ?")) {
      await dispatch(deleteTodoAsync(id));
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

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
  };

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id, !item.completed)}
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
