import React from "react";
import CoinItem from "../CoinItem/CoinItem";
import "./CoinsList.css";

export default function CoinsList({ coins }) {
  return (
    <section className="coins-list-container">
      {coins && coins.map((coin) => <CoinItem key={coin.id} item={coin} />)}
    </section>
  );
}
