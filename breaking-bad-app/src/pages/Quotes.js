import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../redux/quotesSlice";
function Quotes() {
  const quotes = useSelector((state) => state.quotes.items);
  const error = useSelector((state) => state.quotes.error);
  const status = useSelector((state) => state.quotes.status);

  console.log(quotes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuotes());
    }
  }, [dispatch, status]);
  return (
    <div className="quotes-container">
      {quotes.map((item) => (
        <div className="quote-item">
          {item.quote}
          <strong>{item.author}</strong>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
