import React from "react";

import "scss/general.scss";

interface Props {
  children: React.ReactNode;
}

const Box: React.FC<Props> = ({ children }) => {
  return <div className="box-wrapper">{children}</div>;
};

export default Box;
