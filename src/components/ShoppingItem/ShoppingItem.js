import { useState, useEffect } from "react";
import "../ShoppingItem/shoppingItem.css";

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
    <li className="card">
      <img className="item-img" src={detailItem.sprites?.default} alt="" />
      <p>{name}</p>
      <p>{detailItem.cost + "$"}</p>
    </li>
  );
}
