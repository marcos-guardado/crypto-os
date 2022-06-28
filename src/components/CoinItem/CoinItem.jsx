import React from "react";
import { currencyFormatter } from "../../utils/formatCurrency";
import "./CoinItem.css";

export default function CoinItem({ item }) {
  const { id, symbol, image, name, current_price } = item;
  return (
    <section id={id} className="card-container">
      <section>
        <img src={image} alt="crypto currency" width={100} />
      </section>
      <section>
        <section>
          <b>{name}</b>
        </section>
        <section>
          <pre>{symbol.toUpperCase()}</pre>
        </section>
        <section>
          <pre>${currencyFormatter(current_price)}</pre>
        </section>
      </section>
    </section>
  );
}
