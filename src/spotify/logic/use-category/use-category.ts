import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../use-fetch";
import { IStoreState } from "../store/store-provider";
import { categoryActions } from "../store/category-data";

export interface ICategoryIn {
    categoryId: string;
}

export const useCategory = (props: ICategoryIn) => {
    const { fetchCategoryDetails, fetchingState } = useFetch();

    const dispatch = useDispatch();
    const categoryPlaylists = useSelector((state: IStoreState) =>
        state.categoriesData &&
        state.categoriesData.find((category) => category.categoryId === props.categoryId),
    );

    const fillData = async () => {
        if (categoryPlaylists || !props.categoryId) { return; }

        const response = await fetchCategoryDetails(props.categoryId);
        dispatch(categoryActions.setCategory(props.categoryId, response?.playlists));
    };

    useEffect(() => {
        fillData();
    }, []);

    return {
        fetchingState,
        categoryPlaylists,
    };
};
