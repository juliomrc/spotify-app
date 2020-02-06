import { useEffect, useState } from "react";
import { useFetch } from "../use-fetch";

export const useGetNewReleases = () => {
    const { fetchNewReleases, fetchingState } = useFetch();

    // TODO: Could also be stored in the store
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
