import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contactSlice";
function EditForm({ contact }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;
    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          number
        }
      })
    );
    history.push("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditForm;
