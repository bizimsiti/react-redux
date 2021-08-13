import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../redux/charactersSlice";
import Loading from "../components/Loading";
import Error from "../components/Error";
function Home() {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }
  return (
    <div>
      <h3>Characters</h3>
      <div className="container">
        <ul className="characters-list">
          {characters.map((character, i) => (
            <li className="characters-list-item" key={i}>
              <Link to={`/char/${character.char_id}`}>
                <div className="image-container">
                  <p className="characters-list-item-name">{character.name}</p>
                  <img
                    className="characters-list-item-image"
                    src={character.img}
                    alt={character.name}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="load-button-container">
          {status === "loading" && hasNextPage && <Loading />}
          {hasNextPage ? (
            <button onClick={() => dispatch(fetchCharacters(nextPage))}>
              Load More ({nextPage})
            </button>
          ) : (
            <p>Last page</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
