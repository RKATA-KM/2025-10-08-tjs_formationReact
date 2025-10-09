import React from "react";
import cmpstyle from "./Button.module.css";


interface IButtonProps {
  type?: "button" | "reset" | "submit";
  bgcolor?: string;
  children: string | React.ReactElement | Array<string | React.ReactElement>;
  style?: object;
  clickAction?:(unArg:string)=>void;
}

const Button: React.FC<IButtonProps> = ({ type, bgcolor, children, style,clickAction }) => {
  const buttonOnClick = () => {
    if(clickAction) {
      clickAction("click sur le bouton");
  }
}
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