import { useEffect, useState } from "react";
import "../Card/card.css";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

export default function Card() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    async function getPokeData() {
      const urlItem = "https://pokeapi.co/api/v2/item/";

      try {
        const response = await fetch(urlItem);
        const data = await response.json();
        setItem(data.results);
      } catch (error) {
        console.log("STOP");
      }
    }
    getPokeData();
  }, []);

  return (
    <section>
      <ul className="card-container">
        {items.map((item) => (
          <ShoppingItem key={item.name} name={item.name} url={item.url} />
        ))}
      </ul>
    </section>
  );
}
