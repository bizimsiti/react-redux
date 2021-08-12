import React from "react";
import { useSelector } from "react-redux";
function Notes() {
  const noteList = useSelector((state) => state.notes.items);
  const filterNote = useSelector((state) => state.notes.filterNote);

  return (
    <ul className="notes-container">
      {noteList
        .filter((item) => {
          if (filterNote !== "") {
            return item.note.includes(filterNote);
          }
          return item;
        })
        .map((note) => (
          <li key={note.id} style={{ backgroundColor: note.color }}>
            {note.note}
          </li>
        ))}
    </ul>
  );
}

export default Notes;
