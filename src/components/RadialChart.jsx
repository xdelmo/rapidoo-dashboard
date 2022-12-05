import React, { useState } from "react";
import Chart from "react-apexcharts";

function RadialChart() {
  // informazioni nel RadialChart
  const [userData, setUserData] = useState({
    options: {
      // !dataLabels non funziona e non visualizza all'interno del chart i corsi totali
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "2rem",

          colors: ["#000"],
        },
      },
      // title: {
      //   text: "s",
      // },
      stroke: {
        lineCap: "round",
      },
      colors: ["#e63943", "#ff9fa4", "#ffe1e3"],
      labels: ["Conclusi", "In corso", "In Sospeso"],
    },
    series: [75, 50, 25],
  });

  return (
    <div className="flex-1 p-5 rounded-md bg-light text-accent">
      {/* titolo + lasso di tempo */}
      <div className="relative ">
        {" "}
        <h2 className="mb-2 text-lg font-semibold">Dettagli corso</h2>
        <span className="absolute top-0 right-0 text-sm text-accentParagraph">
          Ultimi 7 gg
        </span>
      </div>
      {/* RADIAL CHARTS */}
      <div className="my-16">
        <div className="radialBar">
          <Chart
            options={userData.options}
            series={userData.series}
            type="radialBar"
          />
        </div>
      </div>
      {/* recap statistiche corsi */}
      <div className="flex flex-col gap-[14px]">
        {/* recap conclusi */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="oval border-primary border-2 border-solid "></div>
            <span className="ml-3 ">Conclusi</span>
          </div>
          <span>2</span>
        </div>
        {/* recap in corso */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="oval border-primaryLight border-2 border-solid"></div>
            <span className="ml-3 ">In corso</span>
          </div>
          <span>4</span>
        </div>
        {/* recap in sospeso */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="oval border-primaryLighter border-2 border-solid"></div>
            <span className="ml-3 ">In sospeso</span>
          </div>
          <span>3</span>
        </div>
      </div>
    </div>
  );
}

export default RadialChart;
