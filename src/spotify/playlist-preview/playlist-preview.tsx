import React from "react";

import "./playlist-preview.css";

export const PlaylistPreview = (props: SpotifyApi.SinglePlaylistResponse) => {
    // // export const PlaylistPreview = (props: any) => {
    // // tslint:disable-next-line: no-magic-numbers
    // const images = props.images.slice(0, 3).map(((image, index) => {
    //     return ;
    // }));
    return (
        <div className={"playlist-preview-container"} >
            <img className={"image"} src={props.images[0].url} />
            <div className={"playlist-title"}>{props.name}</div>
            <div className={"playlist-description"}>{props.description}</div>
        </div>
    );
};
