import {
    LOAD_GAMES,
    LOAD_GAMES_INFO,
    SEARCH_GAMES,
    SET_HAS_MORE_GAMES,
    SET_HAS_MORE_SEARCHED_GAMES
} from '../actions/games';

const initialState = {
    games: [],
    searchedGames: [],
    hasMore: true,
    hasMoreSearchedGames: true,
    gamesTotalCount: 0,
    likedGamesIds: [],
    wishlistGamesIds: [],
}

export const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GAMES:
            return { ...state, games: [...state.games, ...action.payload] }
        case SET_HAS_MORE_GAMES:
            return { ...state, hasMore: action.payload }
        case SEARCH_GAMES:
            return { ...state, searchedGames: action.payload }
        case SET_HAS_MORE_SEARCHED_GAMES:
            return { ...state, hasMoreSearchedGames: action.payload }
        case LOAD_GAMES_INFO:
            return { ...state, gamesTotalCount: action.payload }
        case 'LIKE_GAME':
            return { ...state, likedGamesIds: [...state.likedGamesIds, action.payload] }
        case 'UNLIKE_GAME':
            return { ...state, likedGamesIds: state.likedGamesIds.filter(id => id !== action.payload) }
        case 'WISH_GAME':
            return { ...state, wishlistGamesIds: [...state.wishlistGamesIds, action.payload] }
        case 'UNWISH_GAME':
            return { ...state, wishlistGamesIds: state.wishlistGamesIds.filter(id => id !== action.payload) }
        default:
            return state;
    }
}