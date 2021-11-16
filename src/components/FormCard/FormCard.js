import React from "react";
import "./css/FormCard.css";

const FormCard = ({ heading, children }) => {
  return (
    <div className="card">
      <h1>
        <b>{heading}</b>
      </h1>
      {children}
    </div>
  );
};

export default FormCard;
