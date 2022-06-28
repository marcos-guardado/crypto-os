import React from "react";
import { currencyFormatter } from "../../utils/formatCurrency";
import "./CoinItem.css";

export default function CoinItem({ item }) {
  const { id, symbol, image, name, current_price } = item;
  return (
    <div id={id} className="card-container">
      <div>
        <img src={image} alt="crypto currency" width={100} />
      </div>
      <div>
        <div>
          <b>{name}</b>
        </div>
        <div>
          <pre>{symbol.toUpperCase()}</pre>
        </div>
        <div>
          <pre>${currencyFormatter(current_price)}</pre>
        </div>
      </div>
    </div>
  );
}
