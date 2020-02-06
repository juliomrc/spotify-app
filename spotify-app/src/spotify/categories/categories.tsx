import React from "react";

import { useGetCategories } from "../logic/use-get-catgories/use-get-categories";

import { Category } from "../category";
import { FetchingState } from "../fetching-state";

interface ICategories {
    setExpandedPlaylist: (playlistId: string) => void;
}

export const Categories: React.FC<ICategories> = (props) => {
    const { categories, fetchingState } = useGetCategories();

    const categoryComponents = categories?.map((category) => {
        return (
            <Category key={category.id} categoryId={category.id} onPlaylistClick={props.setExpandedPlaylist} />
        );
    });

    return (
        <>
            <FetchingState {...fetchingState} />
            {categoryComponents}
        </>
    );
};
