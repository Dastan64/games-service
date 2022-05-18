import {LOAD_GAMES, SEARCH_GAMES} from '../actions/games';

const initialState = {
    games: [],
    likedGames: [],
}

export const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GAMES:
            return {...state, games: action.payload}
        case SEARCH_GAMES:
            return {...state, games: action.payload}
        case 'ADD_GAME':
            return {...state, likedGames: [...state.likedGames, action.payload]}
        default:
            return state;
    }
}

