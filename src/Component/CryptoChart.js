import styles from "./cryptocontainer.module.css";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function CryptoChart({coin}) {


const coinlabels=coin.map(coin=>coin.name);
const coinprices=coin.map(coin=>coin.current_price)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "crypto currency prices",
      },
    },
  };

  const labels = coinlabels;

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "price",
        data:coinprices,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(36, 116, 214, 0.374)",
      },
    ],
  };

  return <Line className={styles.chart} options={options} data={data} />;
}
