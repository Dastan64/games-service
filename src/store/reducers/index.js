import {combineReducers} from 'redux';
import {singleGameReducer} from './game';
import {gamesReducer} from './games';
import {platformsReducer} from './platforms';
import {platformDetailsReducer} from './platformDetail';

export const rootReducer = combineReducers({
    games: gamesReducer,
    game: singleGameReducer,
    platforms: platformsReducer,
    platformDetails: platformDetailsReducer,
})