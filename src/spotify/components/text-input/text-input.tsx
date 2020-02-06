import React from "react";

export const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input type={"text"} {...props} />
);
