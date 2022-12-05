import React, { useState } from "react";
import OverTitle from "./OverTitle";
import BarChart from "./BarChart";
import { advicesData } from "../constants/data";
import RadialChart from "./RadialChart";

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
      <div className="flex flex-col gap-7 xl:flex-row">
        <BarChart chartData={userData} />
        <RadialChart />
      </div>
    </div>
  );
}

export default Performance;
