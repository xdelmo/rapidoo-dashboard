import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { advicesData } from "../constants/data";

function BarChart(props) {
  const getTotalAdvices = () => {
    let totalAdvices = 0;
    for (let i = 0; i < advicesData.length; i++) {
      totalAdvices += advicesData[i].advicesDone;
    }
    return totalAdvices;
  };
  return (
    <div>
      <div>
        {/* bar chart */}
        <div className="relative">
          <Bar
            data={props.chartData}
            options={props.chartData.datasets[0].options}
          />
          <span className="absolute top-0 right-0 text-sm text-accentParagraph">
            Ultimi 7 gg
          </span>
        </div>

        {/* totale consulenze */}
        <h2 className="text-2xl font-semibold mt-5">{getTotalAdvices()}</h2>
        <span className="inline-block text-sm">Consulenze</span>

        {/* trend  */}
        <p className="font-light my-5">
          <span className="text-primary font-semibold">+5.2% </span>Rispetto al
          periodo precedente
        </p>

        {/* bottone */}
        <button className="rounded-md bg-accent py-2 w-full text-light text-xs px-3 font-semibold">
          <a href="#" className="inline">
            Approfondisci
          </a>
        </button>

        {/* divisorio */}
        <div className="border-t my-6"></div>

        {/* griglia per tag consulenze */}
        <div className="grid grid-cols-2 gap-6">
          {/* cella tag consulenza */}
          <div>
            <span className="mb-2 text-sm text-accentParagraph block">
              Imprenditoria: 20
            </span>
            <div class=" bg-accentDesaturated h-2 rounded-md">
              <div class="w-[50%] h-2 bg-entrepreneurship rounded-md"></div>
            </div>
          </div>
          <div>
            <span className="mb-2 text-sm text-accentParagraph block">
              Economia: 10
            </span>
            <div class=" bg-accentDesaturated h-2 rounded-md">
              <div class="w-[70%] h-2 bg-economy rounded-md"></div>
            </div>
          </div>
          <div>
            <span className="mb-2 text-sm text-accentParagraph block">
              Formazione: 15
            </span>
            <div class=" bg-accentDesaturated h-2 rounded-md">
              <div class="w-[75%] h-2 bg-training rounded-md"></div>
            </div>
          </div>
          <div>
            <span className="mb-2 text-sm text-accentParagraph block">
              Operatività: 5
            </span>
            <div class=" bg-accentDesaturated h-2 rounded-md">
              <div class="w-[90%] h-2 bg-operation rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarChart;
