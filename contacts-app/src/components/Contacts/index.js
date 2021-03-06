import React from "react";
import Form from "./Form";
import List from "./List";
import { useSelector } from "react-redux";
import { contactSelector } from "../../redux/contactSlice";
function Contacts() {
  const total = useSelector(contactSelector.selectTotal);
  return (
    <div className="contacts-container">
      <h1 className="header-title">Contacts({total})</h1>
      <Form />
      <List />
    </div>
  );
}

export default Contacts;
