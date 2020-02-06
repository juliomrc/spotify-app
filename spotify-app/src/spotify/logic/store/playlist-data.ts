import * as Redux from "redux";
import { ActionType } from "./actions";

export interface IPlaylistData {
    playlistId: string;
    playlist: SpotifyApi.SinglePlaylistResponse;
}

export const playlistData: Redux.Reducer<IPlaylistData[]> = (state = [], action: Redux.AnyAction) => {
    switch (action.type) {
        case ActionType.SET_PLAYLIST:
            const unTouchedPlaylists = state.filter((category) => category.playlistId !== action.playlistId);
            return [
                ...unTouchedPlaylists,
                {
                    playlistId: action.playlistId,
                    playlist: action.data,
                },
            ];
        default:
            return state;
    }
};

export const playlistActions = {
    setPlaylist: (playlistId: string, data?: SpotifyApi.SinglePlaylistResponse) =>
        ({ type: ActionType.SET_PLAYLIST, playlistId, data }),
};
