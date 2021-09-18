import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";
import { Link } from "react-router-dom";
function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("are you sure")) {
      dispatch(deleteContact(id));
    }
  };
  return (
    <li className="list-item">
      <div>
        <span className="header-item">Name:</span>
        {item.name}
      </div>
      <div>
        <span className="header-item">Number:</span>
        {item.number}
      </div>
      <div className="delete-btn-wrapper">
        <Link to={`/edit/${item.id}`} className="edit-btn">
          Edit
        </Link>
        <span className="delete-btn" onClick={() => handleDelete(item.id)}>
          X
        </span>
      </div>
    </li>
  );
}

export default Item;
