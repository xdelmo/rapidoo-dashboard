import React, { useState } from "react";
import OverTitle from "./OverTitle";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";
import BarChart from "./BarChart";
import { advicesData } from "../constants/data";

function Performance() {
  const [userData, setUserData] = useState({
    labels: advicesData.map((data) => data.day),
    datasets: [
      {
        maxBarThickness: 17,
        label: "Consulenze",
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              display: false,

              ticks: {
                display: false,
              },
              grid: {
                drawOnChartArea: false,
                display: false,
              },
            },
            // NON FUNZIONA LA LARGHEZZA DELLE BARRE
            // xAxes: [
            //   {
            //     barThickness: 1,
            //   },
            // ],
            y: {
              display: false,

              ticks: {
                display: false,
              },
              grid: {
                drawOnChartArea: false,
                display: false,
              },
            },
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        },
        data: advicesData.map((data) => data.advicesDone),
        backgroundColor: [
          "#f0f1f5",
          "#f0f1f5",
          "#e63943",
          "#f0f1f5",
          "#f0f1f5",
          "#f0f1f5",
          "#f0f1f5",
        ],
        borderRadius: "99999",
      },
    ],
  });

  return (
    <div className="h-full">
      <OverTitle title="Le mie performance" />
      <div className=" bg-light rounded-md p-5">
        <BarChart chartData={userData} />
        {/* <Bar options={options} data={data} /> */}
        {/* <div className="">Performance</div> */}
        {/* 2 COMPONENTI DIFFERENTI PER I CHART
        BarChart, DoughnutChart */}
      </div>
    </div>
  );
}

export default Performance;
