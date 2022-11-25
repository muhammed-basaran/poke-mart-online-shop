import { useState, useEffect } from "react";

import styled from "styled-components";

export default function ShoppingItem({ name, url }) {
  const [detailItem, setDetailItem] = useState({});

  useEffect(() => {
    async function getDetailData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDetailItem(data);
      } catch (error) {
        console.log("STOP");
      }
    }
    getDetailData();
  }, [url]);

  return (
    <StyledCard>
      <StyledImg src={detailItem.sprites?.default} alt="" />
      <p>{name}</p>
      <p>{detailItem.cost + "$"}</p>
    </StyledCard>
  );
}

const StyledImg = styled.img`
  width: 60px;
`;

const StyledCard = styled.li`
  padding: 20px;
  border: 2px solid black;
  width: 10rem;
  height: 13rem;
  list-style: none;
  border-radius: 20%;
`;
