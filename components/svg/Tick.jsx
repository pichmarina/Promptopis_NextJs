import React from "react";

const Tick = (props) => {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="#2563eb"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
};

export default Tick;
