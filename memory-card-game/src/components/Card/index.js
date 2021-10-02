import { useDispatch } from "react-redux";
import { openCard } from "../../redux/cardSlice";
function Card({ item }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openCard(item.id));
  };

  return (
    <div
      className={`card ${item.close ? "" : "opened"} ${
        item.completed ? "matched" : ""
      }`}
      onClick={() => handleClick()}
    >
      <div className="front">?</div>
      <div className="back">
        <img
          alt={item.name}
          src={
            "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" +
            item.name +
            ".png"
          }
        />
      </div>
    </div>
  );
}

export default Card;
