import React from "react";

function RequestAdvice() {
  return (
    <div>
      <div className="p-5 bg-white rounded-md flex flex-col justify-between">
        <div className="text-accent ">
          <h2 className="text-lg mb-2">Non sai di cosa hai bisogno?</h2>
          <p className="text-accentParagraph text-sm mb-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        <button className="rounded-md bg-accent py-2 w-full text-light text-xs px-3 font-semibold">
          <a href="#" className="inline">
            Richiedi consulenza
          </a>
        </button>
      </div>
    </div>
  );
}

export default RequestAdvice;
