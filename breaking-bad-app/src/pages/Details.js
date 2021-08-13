import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
function Details() {
  let { id } = useParams();
  const [character, setCharacter] = useState(null);
  console.log(character);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/characters/${id}`)
      .then((res) => res.data)
      .then((data) => setCharacter(data[0]));
  }, [id]);

  return (
    <div className="details-container">
      {character && <Card character={character} />}
    </div>
  );
}

export default Details;
