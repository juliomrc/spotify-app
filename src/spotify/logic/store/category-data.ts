import * as Redux from "redux";
import { ActionType } from "./actions";

export interface ICategoryData {
    categoryId: string;
    categoryData: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified>;
}

export const categoriesData: Redux.Reducer<ICategoryData[]> = (state = [], action: Redux.AnyAction) => {
    switch (action.type) {
        case ActionType.SET_CATEGORY:
            const unTouchedCategories = state.filter((category) => category.categoryId !== action.categoryId);
            return [
                ...unTouchedCategories,
                {
                    categoryId: action.categoryId,
                    categoryData: action.data,
                },
            ];
        default:
            return state;
    }
};

export const categoryActions = {
    setCategory: (categoryId: string, data?: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified>) =>
        ({ type: ActionType.SET_CATEGORY, categoryId, data }),
};
