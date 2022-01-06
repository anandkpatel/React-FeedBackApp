import React from "react";

const Card = ({ children, reverse }) => {
  return <div className="card">{children}</div>;
};

Card.defaultProps = {
  reverse: false,
};
export default Card;
