import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../use-fetch";
import { IStoreState } from "../store/store-provider";
import { categoryActions } from "../store/category-data";

export const useGetNewReleases = () => {
    const { fetchNewReleases, fetchingState } = useFetch();

    // const dispatch = useDispatch();
    // const categoryPlaylists = useSelector((state: IStoreState) =>
    //     state.categoriesData,
    // );

    const [newAlbuns, setNewAlbuns] = useState<SpotifyApi.AlbumObjectSimplified[]>();

    const fillData = async () => {
        if (newAlbuns) { return; }

        const response = await fetchNewReleases();
        setNewAlbuns(response?.albums.items);
    };

    useEffect(() => {
        fillData();
    }, []);

    return {
        fetchingState,
        newAlbuns,
    };
};
