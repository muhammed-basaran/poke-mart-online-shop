import { useEffect, useState } from "react";

export default function Card() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function shoppingItem() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/item/");
        const data = await response.json();
        setItem(data.results);
      } catch (error) {
        console.log("STOP");
      }
    }
    shoppingItem();
  }, []);

  return (
    <section>
      <ul>
        {item.map(({ name }) => (
          <li className="card" key={name}>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
