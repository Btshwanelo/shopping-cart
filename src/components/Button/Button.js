import React from "react";
import "./css/Button.css";

const LargeButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="lgButton">
      {children}
    </button>
  );
};

export default LargeButton;
