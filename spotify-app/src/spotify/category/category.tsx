import React from "react";

import { useCategory } from "../logic/use-category";
import { useGetNewReleases } from "../logic/use-get-new-releases/use-get-new-releases";

import { PlaylistPreview } from "../playlist-preview";
import { Button } from "../components/button";
import { FetchingState } from "../fetching-state";

import "./category.css";

interface ICategory {
    categoryId: string;
    showNewReleases?: boolean;
    onPlaylistClick: (playlistId: string) => void;
}

export const Category = (props: ICategory) => {
    // TODO: These shouldn't both be fetched on componentDidMount because the user might never open the second page. Unnecessary call
    const { categoryPlaylists, fetchingState } = useCategory({ categoryId: props.categoryId });
    const { newAlbuns, fetchingState: newReleasesFetchingState } = useGetNewReleases();

    const mergedFetchingState = props.showNewReleases ? newReleasesFetchingState : fetchingState;

    // TODO: Library typings are incorrect. Both endpoints return the same object but the typings are different
    const content: any = props.showNewReleases ? newAlbuns : categoryPlaylists?.categoryData?.items;
    const playListComponents = content?.map((playlist: any) => {
        const onPlaylistClick = () => {
            props.onPlaylistClick(playlist.id);
        };

        return (
            <Button key={playlist.id} onClick={onPlaylistClick} className={"playlist-item"}>
                <PlaylistPreview {...playlist} />
            </Button>
        );
    });

    return (
        <div className={"category-container"}>
            <FetchingState {...mergedFetchingState} />
            <div className={"category-title"}>{capitalizeFirstLetter(categoryPlaylists?.categoryId)}</div>
            <div className={"playlist-row"}>
                {playListComponents}
            </div>
        </div>
    );
};

const capitalizeFirstLetter = (string?: string) => {
    return string && string.charAt(0).toUpperCase() + string.slice(1);
};
