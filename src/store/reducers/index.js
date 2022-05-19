import {combineReducers} from 'redux';
import {singleGameReducer} from './game';
import {gamesReducer} from './games';
import {platformsReducer} from './platforms';

export const rootReducer = combineReducers({
    games: gamesReducer,
    game: singleGameReducer,
    platforms: platformsReducer,
})