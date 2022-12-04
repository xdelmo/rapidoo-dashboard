import React from "react";

function DoughnutChart() {
  return (
    <div className="flex-1 p-5 rounded-md bg-light text-accent">
      <div className="relative ">
        {" "}
        <h2 className="mb-2 text-lg font-semibold">Dettagli corso</h2>
        <span className="absolute top-0 right-0 text-sm text-accentParagraph">
          Ultimi 7 gg
        </span>
      </div>
      {/* !INSERIRE I 3 CHART QUI */}
      <div className="my-16">charts</div>
      {/* recap statistiche corsi */}
      <div className="flex flex-col gap-[14px]">
        {/* recap conclusi */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div class="oval border-primary border-2 border-solid "></div>
            <span className="ml-3 ">Conclusi</span>
          </div>
          <span>2</span>
        </div>
        {/* recap in corso */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div class="oval border-primaryLight border-2 border-solid"></div>
            <span className="ml-3 ">In corso</span>
          </div>
          <span>4</span>
        </div>
        {/* recap in sospeso */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div class="oval border-primaryLighter border-2 border-solid"></div>
            <span className="ml-3 ">In sospeso</span>
          </div>
          <span>3</span>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
