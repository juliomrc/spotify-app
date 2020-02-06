import React from "react";

import "./bottom-bar.css";
import { useSelector } from "react-redux";
import { IStoreState } from "../logic/store/store-provider";
import { Button } from "../components/button";

export const BottomBar = () => {
    const activeMusic = useSelector((state: IStoreState) => state.player && state.player.activeMusic);

    return (
        <>
            {activeMusic &&
                <div className={"bottom-bar"}>
                    <Button></Button>
                    <audio src={activeMusic} autoPlay={true} className={"audio-player"} />
                </div>
            }
        </>
    );
};
