import { useState } from "react";
import "./Favourites.css";

function Favourites() {
  const [Favourites, setFavourites] = useState([]);
  const [food, setFood] = useState([]);
  const [book, setBook] = useState([]);
  <input type="text" value={food} placeholder="Add favourite food" />;
  <input type="text" value={book} placeholder="Add favourite book " />;

  return <div></div>;
}

export default Favourites;
