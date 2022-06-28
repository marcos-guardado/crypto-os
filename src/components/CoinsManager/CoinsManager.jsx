import React, { useEffect, useState } from "react";
import { comparator } from "../../utils/comparator";
import { currencyFormatter } from "../../utils/formatCurrency";
import { getCoins, requestMaker } from "../../utils/requestMaker";
import CoinsList from "../CoinsList/CoinsList";
import Searcher from "../Searcher/Searcher";
import Sorter from "../Sorter/Sorter";
import "./CoinsManager.css";

export default function CoinsManager() {
  const [coinsNum, setCoinsNum] = useState(5);
  const [totalValue, setTotalValue] = useState(0);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCurrencies();
  }, [coinsNum]);

  const getCurrencies = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&per_page=${coinsNum}&page=1`;
    const data = await getCoins(url);
    setCoins(data);
    setTotalValue(
      data.reduce((acc, currentVal) => acc + currentVal.current_price, 0)
    );
  };

  const loadMoreCoins = () => {
    if (coinsNum >= 30) {
      alert("No more coins, buddy");
      return;
    }
    setCoinsNum(coinsNum + 5);
    setTotalValue(
      coins.reduce((acc, currentVal) => acc + currentVal.current_price, 0)
    );
  };

  const onSearch = ({ target: { value } }) => {
    if (value.trim() === "") {
      getCurrencies();
      return;
    }
    let matches = coins.filter(({ name }) => name.toLowerCase().match(value));
    setCoins(matches);
  };

  const onSort = ({ target: { value } }) => {
    switch (value) {
      case "asc":
        setCoins([].concat(coins).sort((a, b) => comparator(a, b, "name")));
        break;
      case "desc":
        setCoins([].concat(coins).sort((a, b) => comparator(b, a, "name")));
        break;
      case "higher":
        setCoins(
          [].concat(coins).sort((a, b) => comparator(b, a, "current_price"))
        );
        break;
      case "lowest":
        setCoins(
          [].concat(coins).sort((a, b) => comparator(a, b, "current_price"))
        );
        break;
      default:
        return;
    }
  };

  return (
    <section>
      <header className="header-container">
        <h2>Crypto Currency OS</h2>
        <button onClick={loadMoreCoins}>🔄</button>
      </header>
      <section className="information-container">
        <section>Current Currencies: {coinsNum}</section>
        <section>
          Sum of all currencies: ${currencyFormatter(totalValue)}
        </section>
      </section>
      <section className="searcher-container">
        <Searcher placeholder="Bitcoin, Litecoin..." onChange={onSearch} />
      </section>
      <section className="sorters-container">
        <section>
          <Sorter
            type="Name"
            onSort={onSort}
            options={[
              { value: "", label: "" },
              { value: "asc", label: "Ascending" },
              { value: "desc", label: "Descending" },
            ]}
          />
        </section>
        <section>
          <Sorter
            type="Price"
            onSort={onSort}
            options={[
              { value: "", label: "" },
              { value: "higher", label: "Higher price" },
              { value: "lowest", label: "Lowest price" },
            ]}
          />
        </section>
      </section>
      <div>
        <CoinsList coins={coins} />
      </div>
    </section>
  );
}
