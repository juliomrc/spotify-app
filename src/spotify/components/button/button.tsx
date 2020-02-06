import React from "react";
import classNames from "classnames";

import "./button.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button: React.FC<IButtonProps> = (props) => (
    <button {...props} className={classNames("reset-button-style", props.className)} />
);
