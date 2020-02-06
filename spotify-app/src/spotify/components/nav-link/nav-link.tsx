import React from "react";
import { NavLink as NativeNavLink, NavLinkProps } from "react-router-dom";

export const NavLink: React.FC<NavLinkProps> = (props) => (
    <NativeNavLink {...props} />
);
