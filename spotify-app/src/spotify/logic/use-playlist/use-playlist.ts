import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../use-fetch";
import { IStoreState } from "../store/store-provider";
import { playlistActions } from "../store/playlist-data";

export interface IPlaylistIn {
    playlistId: string;
}

export const usePlaylist = (props: IPlaylistIn) => {
    const { fetchPlaylist, fetchingState } = useFetch();

    const dispatch = useDispatch();
    const categoryPlaylists = useSelector((state: IStoreState) =>
        state.playlistData &&
        state.playlistData.find((playlist) => playlist.playlistId === props.playlistId,
        ));

    const fillData = async () => {
        if (categoryPlaylists) { return; }

        const playlist = await fetchPlaylist(props.playlistId);
        dispatch(playlistActions.setPlaylist(props.playlistId, playlist));
    };

    useEffect(() => {
        fillData();
    }, []);

    return {
        fetchingState,
        categoryPlaylists,
    };
};
