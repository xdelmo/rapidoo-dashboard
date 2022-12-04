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
    <div className="flex-1 p-5 rounded-md bg-light">
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
        <h2 className="mt-5 text-2xl font-semibold">{getTotalAdvices()}</h2>
        <span className="inline-block text-sm">Consulenze</span>

        {/* trend  */}
        <p className="my-5 font-light">
          <span className="font-semibold text-primary">+5.2% </span>Rispetto al
          periodo precedente
        </p>

        {/* bottone */}
        <button className="w-full px-3 py-2 text-xs font-semibold rounded-md bg-accent text-light">
          <a href="#" className="inline">
            Approfondisci
          </a>
        </button>

        {/* divisorio */}
        <div className="my-6 border-t"></div>

        {/* griglia per tag consulenze */}
        <div className="grid grid-cols-2 gap-6">
          {/* cella tag consulenza */}
          <div>
            <span className="block mb-2 text-sm text-accentParagraph">
              Imprenditoria: 20
            </span>
            <div class=" bg-accentDesaturated h-2 rounded-md">
              <div class="w-[50%] h-2 bg-entrepreneurship rounded-md"></div>
            </div>
          </div>
          <div>
            <span className="block mb-2 text-sm text-accentParagraph">
              Economia: 10
            </span>
            <div class=" bg-accentDesaturated h-2 rounded-md">
              <div class="w-[70%] h-2 bg-economy rounded-md"></div>
            </div>
          </div>
          <div>
            <span className="block mb-2 text-sm text-accentParagraph">
              Formazione: 15
            </span>
            <div class=" bg-accentDesaturated h-2 rounded-md">
              <div class="w-[75%] h-2 bg-training rounded-md"></div>
            </div>
          </div>
          <div>
            <span className="block mb-2 text-sm text-accentParagraph">
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
