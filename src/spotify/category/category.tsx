import React from "react";
// TODO: ALIAS
import { useCategory, ICategoryIn } from "../logic/use-category";
import { PlaylistPreview } from "../playlist-preview";

import "./category.css";
import { Button } from "../components/button";
import { useGetNewReleases } from "../logic/use-get-new-releases/use-get-new-releases";
import { FetchingState } from "../fetching-state";

interface ICategory {
    categoryId: string;
    showNewReleases?: boolean;
    onPlaylistClick: (playlistId: string) => void;
}

export const Category = (props: ICategory) => {
    const { categoryPlaylists, fetchingState } = useCategory({ categoryId: props.categoryId });
    const { newAlbuns, fetchingState: newReleasesFetchingState } = useGetNewReleases();

    const mergedFetchingState = props.showNewReleases ? newReleasesFetchingState : fetchingState;
    const content: any = props.showNewReleases ? newAlbuns : categoryPlaylists?.categoryData?.items;

    // TODO: Library typings are incorrect. Both endpoints return the same object but the typings are different
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
