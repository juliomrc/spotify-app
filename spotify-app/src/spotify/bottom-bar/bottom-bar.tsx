import React from "react";
import { useSelector } from "react-redux";

import { IStoreState } from "../logic/store/store-provider";

import "./bottom-bar.css";

export const BottomBar = () => {
    // TODO: Instead of the url for the active music, it should also be possible to set an active playlist and go through tracks.
    // Own player should handle that
    const activeMusic = useSelector((state: IStoreState) => state.player && state.player.activeMusic);

    // TODO: Create own player
    return (
        <>
            {activeMusic &&
                <div className={"bottom-bar"}>
                    <audio src={activeMusic} controls autoPlay={true} className={"audio-player"} />
                </div>
            }
        </>
    );
};
