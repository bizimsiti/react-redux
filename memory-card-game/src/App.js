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
      <div className="footer">
        <a href="https://github.com/bizimsiti">GİTHUB</a>
      </div>
    </div>
  );
}

export default App;
