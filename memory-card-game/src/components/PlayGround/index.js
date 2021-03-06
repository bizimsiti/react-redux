import Card from "../Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkCard, startGame, initGame } from "../../redux/cardSlice";

function Playground() {
  const cards = useSelector((state) => state.cards.randomizedItems);
  const score = useSelector((state) => state.cards.score);
  const openedCards = useSelector((state) => state.cards.openedItems);
  const dispatch = useDispatch();
  const handleStart = () => {
    dispatch(startGame());
    setTimeout(() => {
      dispatch(initGame());
    }, 5000);
  };
  useEffect(() => {
    if (openedCards.length === 2) {
      setTimeout(() => {
        dispatch(checkCard());
      }, 500);
    }
  }, [dispatch, openedCards]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(initGame());
    }, 5000);
  }, [dispatch]);
  return (
    <div className="playground">
      {score <= 0 ? (
        <div className="modal">
          <div className="modal-container">
            <div className="modal-header">Game Over :(</div>
            <div className="modal-btn">
              <button onClick={() => handleStart()}>Try Again</button>
            </div>
          </div>
        </div>
      ) : (
        cards.map((item) => <Card key={item.id} item={item} />)
      )}
    </div>
  );
}

export default Playground;
