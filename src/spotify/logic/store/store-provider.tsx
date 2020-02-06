import React from "react";
import * as Redux from "redux";
import { Provider } from "react-redux";

import { ICategoryData, categoriesData } from "./category-data";
import { IPlaylistData, playlistData } from "./playlist-data";
import { IPlayer, player } from "./player";

export interface IStoreState {
    categoriesData: ICategoryData[];
    playlistData: IPlaylistData[];
    player: IPlayer;
}

let store: Redux.Store<IStoreState>;
const createStore = () => {

    const reducers = Redux.combineReducers({
        categoriesData,
        playlistData,
        player,
    });

    store = Redux.createStore(
        reducers,
        {
            categoriesData: [],
            playlistData: [],
            player: { activeMusic: "" },
        },
    );

    return store;
};

store = createStore();

export const StoreProvider: React.FC = (props) => (
    <Provider store={store}>
        {props.children}
    </Provider>
);
