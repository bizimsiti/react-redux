import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";

function Form() {
  const [color, setColor] = useState("#512D6D");
  const [inputText, setInputText] = useState("");
  const customRadioButton = [
    { value: "#512D6D" },
    { value: "#F8485E" },
    { value: "#BD4B4B" },
    { value: "#FFB740" }
  ];
  const dispatch = useDispatch();

  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      dispatch(addNote({ id: nanoid(5), note: inputText, color }));
    }
    setInputText("");
  };
  return (
    <form className="form-container">
      <input
        type="text"
        placeholder="Enter your note here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="controls-container">
        <div htmlFor="" className="radio-container">
          {customRadioButton.map((item) => (
            <label key={item.value} className="radio-container-wrapper">
              <input
                type="radio"
                name="colors"
                value={item.value}
                checked={item.value === color}
                onChange={(e) => handleColor(e)}
              />
              <span
                className="custom-radio"
                style={{ backgroundColor: item.value }}
              ></span>
            </label>
          ))}
        </div>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </div>
    </form>
  );
}

export default Form;
