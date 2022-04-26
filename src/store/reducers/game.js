import {GET_ACHIEVEMENTS, GET_GAMES_FROM_SERIES} from "../actions/card";

const initialState = {
    gameAchievements: [],
    gamesFromSameSeries: [],
}

export const singleGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACHIEVEMENTS:
            return {...state, gameAchievements: action.payload}
        case GET_GAMES_FROM_SERIES:
            return {...state, gamesFromSameSeries: action.payload}
        default:
            return state;
    }
}