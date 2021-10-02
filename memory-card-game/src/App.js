import "./app.css";
import PlayGround from "./components/PlayGround";
import { useSelector } from "react-redux";
function App() {
  const score = useSelector((state) => state.cards.score);
  return (
    <div>
      <div className="navbar">
        <span>SCORE: {score}</span>
      </div>
      <PlayGround />
    </div>
  );
}

export default App;
