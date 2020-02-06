import { useState } from "react";

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

// Implementation to use with the auth_server.
// Should be unnecessary after integration

const getHashParams = () => {
    const hashParams: any = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.search.substring(1);
    let e = r.exec(q);
    while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
    }
    return hashParams;
};
const initialize = async () => {
    const params = getHashParams();
    const token = params.access_token;
    if (token) {
        spotify.setAccessToken(token);
    }
};

initialize();

export interface IFetchingState {
    isLoading?: boolean;
    hasError?: boolean;
}

export const useFetch = () => {
    const [fetchingState, setFetchingState] = useState<IFetchingState>();

    // TODO: The try catch logic with the loader and error handling should be generic and shared
    const fetchNewReleases = async () => {
        try {
            setFetchingState({ isLoading: true });
            const response = await spotify.getNewReleases();
            setFetchingState({ isLoading: false });

            return response;

        } catch {
            setFetchingState({ isLoading: false, hasError: true });

            // TODO, all responses shoud extend IFetchingState and then the
            // validation should be done in the presentational component
            // instead of validation for null values in all parts of the object
        }
    };

    const fetchCategories = async () => {
        try {
            setFetchingState({ isLoading: true });
            const response = await spotify.getCategories();
            setFetchingState({ isLoading: false });

            return response;

        } catch {
            setFetchingState({ isLoading: false, hasError: true });
        }
    };

    const search = async (searchTerm: string) => {
        try {
            setFetchingState({ isLoading: true });
            const response = await spotify.search(searchTerm, ["album", "artist", "playlist", "track"]);
            setFetchingState({ isLoading: false });

            return response;

        } catch {
            setFetchingState({ isLoading: false, hasError: true });
        }
    };

    const fetchCategoryDetails = async (categoryID: string) => {
        try {
            setFetchingState({ isLoading: true });
            const response = await spotify.getCategoryPlaylists(categoryID, { limit: 5 });
            setFetchingState({ isLoading: false });

            return response;

        } catch {
            setFetchingState({ isLoading: false, hasError: true });
        }
    };

    const fetchPlaylist = async (playListId: string) => {
        try {
            setFetchingState({ isLoading: true });
            const response = await spotify.getPlaylist(playListId);
            setFetchingState({ isLoading: false });

            return response;

        } catch {
            setFetchingState({ isLoading: false, hasError: true });
        }
    };

    return {
        fetchingState,
        fetchNewReleases,
        fetchCategories,
        fetchCategoryDetails,
        fetchPlaylist,
        search,
    };
};
