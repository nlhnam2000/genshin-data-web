import React from "react";
import "scss/general.scss";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className="card-wrapper">{children}</div>;
};

export default Card;
