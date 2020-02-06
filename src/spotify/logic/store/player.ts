import * as Redux from "redux";
import { ActionType } from "./actions";

export interface IPlayer {
    activeMusic: string;
}

export const player: Redux.Reducer<IPlayer> = (state = { activeMusic: "" }, action: Redux.AnyAction) => {
    switch (action.type) {
        case ActionType.PLAY_MUSIC:
            return { ...state, activeMusic: action.track };
        case ActionType.HIDE_PLAYER:
            return { activeMusic: "" };
        default:
            return state;
    }
};

export const playerActions = {
    setCategory: (track: string) =>
        ({ type: ActionType.PLAY_MUSIC, track }),
};
