import React from "react";
import cmpstyle from "./Button.module.css";

interface IButtonProps {
  type?: "button" | "reset" | "submit";
  bgcolor?: string;
  children: string | React.ReactElement | Array<string | React.ReactElement>;
  style?: object;
}

const Button: React.FC<IButtonProps> = ({ type, bgcolor, children, style }) => {
  const buttonOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event);
  };
  return (
    <button
      type={type}
      className={cmpstyle.Button}
      style={{ ...style, backgroundColor: bgcolor }}
      data-testid="Button"
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
