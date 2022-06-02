import { combineReducers } from 'redux';
import { singleGameReducer } from './game';
import { gamesReducer } from './games';
import { platformsReducer } from './platforms';
import { platformDetailsReducer } from './platformDetail';
import { genreDetailsReducer } from './genreDetail';
import { genresReducer } from './genres';
import { storesReducer } from './stores';
import { followingReducer } from './following';
import { tagsReducer } from './tags';

export const rootReducer = combineReducers({
    games: gamesReducer,
    game: singleGameReducer,
    platforms: platformsReducer,
    genres: genresReducer,
    stores: storesReducer,
    tags: tagsReducer,
    platformDetails: platformDetailsReducer,
    genreDetails: genreDetailsReducer,
    following: followingReducer,
})