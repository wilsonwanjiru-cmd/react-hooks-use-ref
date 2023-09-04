import React, { useEffect, useState } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    const id = setInterval(() => {
      const newPrice = makeRandomNumber();
      if (newPrice > price) {
        setColor("green");
      } else if (newPrice < price) {
        setColor("red");
      } else {
        setColor("black");
      }
      setPrice(newPrice);
    }, 1000);

    return function cleanup() {
      clearInterval(id);
    };
  }, [price]);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price.toFixed(2)}</h2>
    </div>
  );
}

export default Ticker;

