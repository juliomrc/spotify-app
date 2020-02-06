import React, { useState } from "react";

import { TopBar } from "../top-bar/top-bar";
import { SideBar } from "../side-bar/side-bar";
import { BottomBar } from "../bottom-bar";
import { Categories } from "../categories";
import { Playlist } from "../playlist";

import "./container.css";
import { Category } from "../category";

export enum ContentMode {
    NewReleases,
    Categories,
    Search,
    Playlist,
}

export const MasterContainer = () => {
    const [contentMode, setContentMode] = useState(ContentMode.Categories);
    const [searchFilter, setSearchFilter] = useState("");
    const [expandedPlaylist, setExpandedPlaylist] = useState<string>("");

    const onSetExpandedPlaylist = (playlistId: string) => {
        setExpandedPlaylist(playlistId);
        setContentMode(ContentMode.Playlist);
    };

    const onSearchInputChange = (value: string) => {
        setSearchFilter(value);
        if (!value) {
            setContentMode(ContentMode.Categories);
            return;
        }
        setContentMode(ContentMode.Search);
    };

    const content = () => {
        switch (contentMode) {
            case ContentMode.Categories:
                return <Categories setExpandedPlaylist={onSetExpandedPlaylist} />;
            case ContentMode.NewReleases:
                return <Category categoryId={""} showNewReleases={true} onPlaylistClick={onSetExpandedPlaylist} />;
            case ContentMode.Playlist:
                return <Playlist playlistId={expandedPlaylist} />;
            case ContentMode.Search:
                return <div>Search {searchFilter}</div>;
        }
    };

    return (
        <div className={"main-app-container"}>
            <SideBar activeMode={contentMode} setContentMode={setContentMode} />
            <div className={"center-container"}>
                <TopBar onSearchInputChange={onSearchInputChange} />
                <div className={"content"}>
                    {content()}
                </div>
            </div>
            <BottomBar />
        </div>
    );
};
