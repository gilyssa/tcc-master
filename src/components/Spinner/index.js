import React from "react";

const spinnerStyle = {
  display: "inline-block",
  width: "40px",
  height: "40px",
  border: "4px solid rgba(1, 0, 0, 0.1)",
  borderLeftColor: "#000",
  borderRadius: "80%",
  top: "50%",
  left: "50%",
  animation: "spin 1s ease infinite",
};

function Spinner() {
  return (
    <div className="parent">
      <div className="spinner" style={spinnerStyle}></div>
      <style>
        {`
        .parent {
          position: relative;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
    </div>
  );
}

export default Spinner;
