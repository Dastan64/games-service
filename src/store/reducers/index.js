import { combineReducers } from 'redux';
import { singleGameReducer } from './game';
import { gamesReducer } from './games';
import { platformsReducer } from './platforms';
import { platformDetailsReducer } from './platformDetail';
import { detailsReducer } from './details';
import { genresReducer } from './genres';
import { storesReducer } from './stores';
import { followingReducer } from './following';
import { tagsReducer } from './tags';
import { developersReducer } from './developers';
import { publishersReducer } from './publishers';
import { creatorsReducer } from './creators';
import { urlParamsReducer } from './urlParams';

export const rootReducer = combineReducers({
    games: gamesReducer,
    game: singleGameReducer,
    platforms: platformsReducer,
    genres: genresReducer,
    stores: storesReducer,
    developers: developersReducer,
    publishers: publishersReducer,
    creators: creatorsReducer,
    tags: tagsReducer,
    platformDetails: platformDetailsReducer,
    details: detailsReducer,
    following: followingReducer,
    urlParams: urlParamsReducer,
})
