import React from "react";

const FancyButton = ({ onClick, children }) => (
  <button style={{ backgroundColor: "Blue", color: "White" }} onClick={onClick}>
    {children}
  </button>
);

export default FancyButton;
