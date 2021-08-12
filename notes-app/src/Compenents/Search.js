import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { filterNote } from "../redux/notes/notesSlice";

function Search() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterNote(searchText));
  }, [dispatch, searchText]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default Search;
