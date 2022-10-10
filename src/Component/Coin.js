import React from "react";
import styles from "./crypto.module.css";
const Coin = ({ coin }) => {
  const {
    market_cap_rank,
    name,
    image,
    symbol,
    current_price,
    market_cap,
    market_cap_change_percentage_24h,
    high_24h,
    low_24h,
  } = coin;

  return (
      <tr>
        <td className={styles.coin_id} >
          <span className={styles.coin_rank}>{market_cap_rank}</span>
        </td>
        <td className={styles.coin_info} >
          <img className={styles.coin_image} src={image} alt={name} />
          <h3 className={styles.coin_name}>{name}</h3>
          <span className={styles.coin_symbol}>{symbol.toUpperCase()}</span>
        </td>
        <td className={styles.coin_price} >
          <h4 className={styles.coin_price}>
            {current_price.toLocaleString()}$
          </h4>
        </td>
        <td className={styles.coin_24h} >
          <h4
            className={
              market_cap_change_percentage_24h > 0
                ? styles.greenpricechange
                : styles.redpricechange
            }
          >
            {market_cap_change_percentage_24h}
          </h4>
        </td>
        <td className={styles.coin_mkt} >
          <h4 className={styles.coin_market_cap}>
            {market_cap.toLocaleString()}$
          </h4>
        </td>
        <td className={styles.coin_high} >
          <h4 className={styles.coin_high_24}>{high_24h}</h4>
        </td>
        <td className={styles.coin_low} >
          <h4 className={styles.coin_low_24}>{low_24h}</h4>
        </td>
      </tr>
  );
};

export default Coin;
