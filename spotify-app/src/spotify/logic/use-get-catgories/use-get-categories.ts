import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../use-fetch";
import { IStoreState } from "../store/store-provider";
import { categoryActions } from "../store/category-data";

export const useGetCategories = () => {
    const { fetchCategories, fetchingState } = useFetch();

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
