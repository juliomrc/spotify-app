import React from "react";

// TODO ALIAS + Route in consts
import { SearchInput } from "../components/search-input/search-input";
import { NavLink } from "../components/nav-link";

import "./top-bar.css";

interface ITopBar {
    onSearchInputChange: (value: string) => void;
}

export const TopBar: React.FC<ITopBar> = (props) => (
    <div className={"top-bar-container"}>
        <SearchInput onChange={props.onSearchInputChange} className={"search"} />
        <NavLink to={"/user"}>User page</NavLink>
    </div>
);
