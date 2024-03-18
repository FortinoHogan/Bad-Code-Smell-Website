import React from "react";
import { IButton } from "./IButton";

const Button = (props: IButton) => {
  const { text, className, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
