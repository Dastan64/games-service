import { combineReducers } from 'redux';
import { singleGameReducer } from './game';
import { gamesReducer } from './games';
import { platformsReducer } from './platforms';
import { platformDetailsReducer } from './platformDetail';
import { genreDetailsReducer } from './genreDetail';
import { genresReducer } from './genres';

export const rootReducer = combineReducers({
    games: gamesReducer,
    game: singleGameReducer,
    platforms: platformsReducer,
    genres: genresReducer,
    platformDetails: platformDetailsReducer,
    genreDetails: genreDetailsReducer,
})