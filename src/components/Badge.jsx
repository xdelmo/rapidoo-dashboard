import React from "react";

function Badge() {
  return (
    <div className="">
      <div className="px-5 bg-accent rounded-md flex justify-between">
        <div className=" py-5 text-light flex flex-col  text-sm">
          <h3>Congratulazioni 🎉 Giorgio!</h3>
          <p className="text-accentParagraph text-xs my-1">
            Hai raggiunto il livello Oro
          </p>
          <p className="my-2 text-xl">250h</p>
          <button className="rounded-md bg-accentParagraph py-2 max-w-[106px] text-xs px-3 maxw">
            Scopri di più
          </button>
        </div>

        <div>
          <img src="./assets/badge.svg" className="max-h-[132px]" alt="badge" />
        </div>
      </div>
    </div>
  );
}

export default Badge;
