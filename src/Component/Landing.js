import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import styles from "./cryptocontainer.module.css";

import { getCion } from "../Services/API";
import Coin from "./Coin";
import { CryptoChart } from "./CryptoChart";
// import { Link } from "react-router-dom";

const Landing = (props) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchapi = async () => {
      setCoins(await getCion());
    };
    fetchapi();
  }, []);

  const searchhandler = (event) => {
    setSearch(event.target.value);
  };

  const foundedcoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const params = props.match.params.id;

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={searchhandler}
      />
      {coins.length ? (
        <div className={styles.chart_cards_container}>
          <CryptoChart coin={foundedcoins} />

          <table className={styles.cardscontainer}>
            <thead>
              <tr>
                <th className={styles.coin_id}>#</th>
                <th className={styles.coin_info}>coin</th>
                <th className={styles.coin_price}>price</th>
                <th className={styles.coin_24h}>24h</th>
                <th className={styles.coin_mkt}>mkt cap</th>
                <th className={styles.coin_high}>high 24h</th>
                <th className={styles.coin_low}>low 24h</th>
              </tr>
            </thead>

            <tbody>
              {foundedcoins.map((coin) => (
                <Coin key={coin.id} coin={coin} />
              ))}
            </tbody>
          </table>

          {/* <section className={styles.panigation}>
            <Link
              className={params === 1 ? styles.selected_panigation : ""}
              to="/landing/1"
            >
              1
            </Link>
            <Link
              className={params === 2 ? styles.selected_panigation : ""}
              to="/landing/2"
            >
              2
            </Link>
            <Link
              className={params === 3 ? styles.selected_panigation : ""}
              to="/landing/3"
            >
              3
            </Link>
            <Link
              className={params === 4 ? styles.selected_panigation : ""}
              to="/landing/4"
            >
              4
            </Link>
            <Link
              className={params === 5 ? styles.selected_panigation : ""}
              to="/landing/5"
            >
              5
            </Link>
          </section> */}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
