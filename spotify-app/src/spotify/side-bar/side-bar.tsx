import React from "react";
import classNames from "classnames";
import { Button } from "../components/button/button";

import { Svg } from "../components/svg";
import { NavLink } from "../components/nav-link";
import spotifyLogo from "../components/resources/icons/spotify_logo_with_text.inline.svg";
import { ContentMode } from "../container";

import "./side-bar.css";

const logoWidth = 160;

interface ISideBar {
    setContentMode: (mode: ContentMode) => void;
    activeMode: ContentMode;
}

export const SideBar: React.FC<ISideBar> = (props) => {
    const onClickCategories = () => props.setContentMode(ContentMode.Categories);
    const onClickNewReleases = () => props.setContentMode(ContentMode.NewReleases);

    const sideBarItemClass = (mode: ContentMode) =>
        classNames(
            "side-bar-item",
            props.activeMode === mode ? "active-item" : "inactive-item",
        );

    return (
        <div className={"side-bar"}>
            <div className={"side-bar-content"}>
                <NavLink to={"/spotify"} className={"logo"}>
                    <Svg width={logoWidth}>{spotifyLogo}</Svg>
                </NavLink>
                <Button onClick={onClickCategories} className={sideBarItemClass(ContentMode.Categories)}>Categories</Button>
                <Button onClick={onClickNewReleases} className={sideBarItemClass(ContentMode.NewReleases)}>New Releases</Button>
            </div>
        </div>
    );
};
