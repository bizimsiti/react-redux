import { useState } from "react";
function Form() {
  const [color, setColor] = useState("#512D6D");
  const customRadioButton = [
    { value: "#512D6D" },
    { value: "#F8485E" },
    { value: "#BD4B4B" },
    { value: "#FFB740" }
  ];
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <form className="form-container">
      <input type="text" placeholder="Enter yout note here..." />
      <div className="controls-container">
        <div htmlFor="" className="radio-container">
          {/* <label className="radio-container-wrapper">
            <input
              type="radio"
              name="colors"
              value="1234"
              onChange={(e) => handleColor(e)}
            />
            <span className="custom-radio"></span>
          </label>
          <label className="radio-container-wrapper">
            <input
              type="radio"
              name="colors"
              value="12345"
              onChange={(e) => handleColor(e)}
            />
            <span className="custom-radio"></span>
          </label>
          <label className="radio-container-wrapper">
            <input
              type="radio"
              name="colors"
              value="123456"
              onChange={(e) => handleColor(e)}
            />
            <span className="custom-radio"></span>
          </label> */}
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
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Form;
