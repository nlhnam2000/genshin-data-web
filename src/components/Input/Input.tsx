import React from "react";

import "scss/elements.scss";

interface Props {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  name: string | undefined;
}

const Input: React.FC<Props> = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
