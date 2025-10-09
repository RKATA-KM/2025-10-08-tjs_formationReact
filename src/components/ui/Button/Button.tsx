import React, { useEffect, useState } from "react";
import cmpstyle from "./Button.module.css";

interface IButtonProps {
  type?: "button" | "reset" | "submit";
  bgcolor?: string;
  children: string | React.ReactElement | Array<string | React.ReactElement>;
  style?: object;
  clickAction?: (unArg: string) => void;
}

const Button: React.FC<IButtonProps> = ({
  type,
  bgcolor,
  children,
  style,
  clickAction,
}) => {
  const buttonOnClick = () => {
    if (clickAction) {
      setclicked(true);
      console.log(clicked);
    }
  };
  
  const [clicked, setclicked] = useState(false);
  useEffect(() => {
    setTimeout(()=>{
      setclicked(false)
    },100)
  }, [clicked]);

  return (
    <button
      type={type}
      className={`${cmpstyle.Button}${clicked ? " " + cmpstyle.clicked : ""}`}
      style={{ ...style, backgroundColor: bgcolor }}
      data-testid="Button"
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
