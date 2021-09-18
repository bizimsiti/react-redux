import React from "react";
import { useParams, Redirect } from "react-router-dom";
import EditForm from "./EditForm";
import { useSelector } from "react-redux";
import { contactSelector } from "../../redux/contactSlice";
function Edit() {
  const { id } = useParams();
  const contact = useSelector((state) => contactSelector.selectById(state, id));

  if (!contact) {
    return <Redirect to="/" />;
  }
  return (
    <div className="edit-container">
      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
