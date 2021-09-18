import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  addContact,
  contactSelector,
  removeAllContacts
} from "../../redux/contactSlice";
import { useSelector } from "react-redux";
function Form() {
  const total = useSelector(contactSelector.selectTotal);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;
    dispatch(addContact({ id: nanoid(), name, number }));
    setName("");
    setNumber("");
  };
  const handleDeleteAll = () => {
    dispatch(removeAllContacts());
    console.log("asda");
  };
  return (
    <div className="form-container">
      {total > 0 && (
        <button
          className="delete-all-btn"
          type="button"
          onClick={() => handleDeleteAll()}
        >
          Delete All
        </button>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="number"
          type="phone"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
