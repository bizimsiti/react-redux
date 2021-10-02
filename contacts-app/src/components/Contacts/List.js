import React from "react";
import { useSelector } from "react-redux";
import { contactSelector } from "../../redux/contactSlice";
import Item from "./Item";
function List() {
  const contacts = useSelector(contactSelector.selectAll);
  console.log(contacts);
  return (
    <div className="items-container">
      <ul className="list-container">
        {contacts.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
    </div>
  );
}

export default List;
