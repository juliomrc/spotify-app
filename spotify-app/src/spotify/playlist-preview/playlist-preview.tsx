import React from "react";

import "./playlist-preview.css";

export const PlaylistPreview = (props: SpotifyApi.SinglePlaylistResponse) => (
    <div className={"playlist-preview-container"} >
        <img className={"image"} src={props.images[0].url} />
        <div className={"playlist-title"}>{props.name}</div>
        <div className={"playlist-description"}>{props.description}</div>
    </div>
);
