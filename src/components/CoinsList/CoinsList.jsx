import React from "react";
import CoinItem from "../CoinItem/CoinItem";
import "./CoinsList.css";

export default function CoinsList({ coins }) {
  return (
    <div className="coins-list-container">
      {coins && coins.map((coin) => <CoinItem key={coin.id} item={coin} />)}
    </div>
  );
}
