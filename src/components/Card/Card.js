import { useEffect, useState } from "react";

import ShoppingItem from "../ShoppingItem/ShoppingItem";
import styled from "styled-components";

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
      <StyledCardContainer>
        {items.map((item) => (
          <ShoppingItem key={item.name} name={item.name} url={item.url} />
        ))}
      </StyledCardContainer>
    </section>
  );
}

const StyledCardContainer = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-items: center;
`;
