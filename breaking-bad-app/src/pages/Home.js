import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../redux/charactersSlice";
import Loading from "../components/Loading";
import Error from "../components/Error";
function Home() {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }
  return (
    <div>
      <h1>Home component</h1>
      <h3>Characters</h3>
      <div className="container">
        <ul className="characters-list">
          {characters.map((character, i) => (
            <li className="characters-list-item" key={i}>
              <div className="image-container">
                <p className="characters-list-item-name">{character.name}</p>
                <img
                  className="characters-list-item-image"
                  src={character.img}
                  alt={character.name}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="load-button-container">
          {isLoading && hasNextPage && <Loading />}
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
