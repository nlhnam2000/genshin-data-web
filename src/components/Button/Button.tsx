import React from "react";

import "scss/elements.scss";

interface Props {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset" | undefined;
}

const PrimaryButton: React.FC<Props> = (props) => {
  return (
    <button
      className="button-primary"
      onClick={props.onClick}
      type={props.type}
    >
      {props.title}
    </button>
  );
};

export default PrimaryButton;
