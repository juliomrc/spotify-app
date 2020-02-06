import React from "react";
import { usePlaylist } from "../logic/use-playlist/use-playlist";

import "./playlist.css";
import { Button } from "../components/button";
import { useDispatch } from "react-redux";
import { playerActions } from "../logic/store/player";
import { FetchingState } from "../fetching-state";

interface IPlaylist {
    playlistId: string;
}

export const Playlist: React.FC<IPlaylist> = (props) => {
    const playlist = usePlaylist({ ...props });
    const dispatch = useDispatch();

    const trackComponents = playlist.categoryPlaylists?.playlist?.tracks.items
        .filter((track) => track.track && track.track.id)
        .map(({ track }) => {

            const onTrackClick = () => {
                const audioToReproduce = track.preview_url;
                if (audioToReproduce) {
                    dispatch(playerActions.setCategory(audioToReproduce));
                }
            };

            return <Button className={"track"} key={track.id} onClick={onTrackClick}>{track.name}</Button>;
        });

    return (
        <div className={"container"}>

            <FetchingState {...playlist.fetchingState} />
            <div className={"flex-collum"}>
                <img className={"playlist-image"} src={playlist.categoryPlaylists?.playlist?.images[0].url} />
                <div className={"title"}>{playlist.categoryPlaylists?.playlist?.name}</div>
            </div>
            <div className={"flex-collum"}>
                {trackComponents}
            </div>
        </div>
    );
};
