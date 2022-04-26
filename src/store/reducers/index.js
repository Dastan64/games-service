import {combineReducers} from "redux";
import {singleGameReducer} from "./game";
import {gamesReducer} from "./games";

export const rootReducer = combineReducers({
    games: gamesReducer,
    game: singleGameReducer,
})