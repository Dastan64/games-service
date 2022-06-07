import {
    GET_ACHIEVEMENTS,
    GET_GAME_DEVELOPERS,
    GET_DLCS,
    GET_GAMES_FROM_SERIES,
    GET_SCREENSHOTS, GET_GAME_DETAILS
} from '../actions/game';

const initialState = {
    game: {},
    gameAchievements: [],
    gamesFromSameSeries: [],
    dlcs: [],
    screenshots: [],
    developers: [],
}

export const singleGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAME_DETAILS:
            return {...state, game: action.payload}
        case GET_ACHIEVEMENTS:
            return {...state, gameAchievements: action.payload}
        case GET_GAMES_FROM_SERIES:
            return {...state, gamesFromSameSeries: action.payload}
        case GET_DLCS:
            return {...state, dlcs: action.payload}
        case GET_SCREENSHOTS:
            return {...state, screenshots: action.payload}
        case GET_GAME_DEVELOPERS:
            return {...state, developers: action.payload}
        default:
            return state;
    }
}