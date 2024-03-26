import React from "react";
import { IButton } from "./IButton";
import { useTheme } from "../../Context/DarkModeContext";

const Button = (props: IButton) => {
  const { text, className, onClick, classNameA } = props;

  if (classNameA) {
    return (
      <button className={`${classNameA} cursor-pointer`} onClick={onClick}>
        <div className={className}>{text}</div>
      </button>
    );
  } else {
    return (
      <button className={`${className} cursor-pointer`} onClick={onClick}>
        {text}
      </button>
    );
  }
};

export default Button;
