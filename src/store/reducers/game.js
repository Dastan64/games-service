import {GET_ACHIEVEMENTS, GET_DEVELOPERS, GET_DLCS, GET_GAMES_FROM_SERIES, GET_SCREENSHOTS} from "../actions/card";

const initialState = {
    gameAchievements: [],
    gamesFromSameSeries: [],
    dlcs: [],
    screenshots: [],
    developers: [],
}

export const singleGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACHIEVEMENTS:
            return {...state, gameAchievements: action.payload}
        case GET_GAMES_FROM_SERIES:
            return {...state, gamesFromSameSeries: action.payload}
        case GET_DLCS:
            return {...state, dlcs: action.payload}
        case GET_SCREENSHOTS:
            return {...state, screenshots: action.payload}
        case GET_DEVELOPERS:
            return {...state, developers: action.payload}
        default:
            return state;
    }
}