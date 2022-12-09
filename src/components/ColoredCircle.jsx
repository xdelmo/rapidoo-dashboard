import React from "react";

function ColoredCircle({ typeMeeting }) {
  return (
    <div
      className={`w-2 h-2  rounded-full  border-solid border-white ${
        typeMeeting === "economy" && "bg-economy"
      } ${typeMeeting === "entrepreneurship" && "bg-entrepreneurship"}
      ${typeMeeting === "training" && "bg-training"}
      ${typeMeeting === "operation" && "bg-operation"} `}
    ></div>
  );
}

export default ColoredCircle;
