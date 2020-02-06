import React from "react";
import { useDispatch } from "react-redux";

import { usePlaylist } from "../logic/use-playlist/use-playlist";
import { playerActions } from "../logic/store/player";

import { Button } from "../components/button";
import { FetchingState } from "../fetching-state";

import "./playlist.css";

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
