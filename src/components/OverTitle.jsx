import React from "react";

function OverTitle(props) {
  return (
    <div>
      <div className="px-5 flex justify-between items-center  border-b-[2px]">
        <h2 className="text-accent text-lg font-light">{props.title}</h2>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <hr className="h-[2px] text-accent" />
    </div>
  );
}

export default OverTitle;
