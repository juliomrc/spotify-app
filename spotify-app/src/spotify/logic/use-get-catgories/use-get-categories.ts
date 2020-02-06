import { useEffect, useState } from "react";
import { useFetch } from "../use-fetch";

export const useGetCategories = () => {
    const { fetchCategories, fetchingState } = useFetch();
    
    // TODO: Could also be stored in the store
    // const dispatch = useDispatch();
    // const categoryPlaylists = useSelector((state: IStoreState) =>
    //     state.categoriesData,
    // );

    const [categories, setCategories] = useState<SpotifyApi.CategoryObject[]>();

    const fillData = async () => {
        if (categories) { return; }

        const response = await fetchCategories();
        setCategories(response?.categories.items);
    };

    useEffect(() => {
        fillData();
    }, []);

    return {
        fetchingState,
        categories,
    };
};
