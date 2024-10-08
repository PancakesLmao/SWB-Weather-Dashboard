import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { windData } from "../assets/chartData";
//
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: "Average Wind Speed (m/s)",
    },
  },
};

function WindChart() {
//   const [chartData, setChartData] = useState(windData);
  return (
    <>
      <div className="col-lg-9 col-md-12 col-sm-9">
        <Line options={options} data={windData} />
      </div>
    </>
  );
}

export default WindChart;
