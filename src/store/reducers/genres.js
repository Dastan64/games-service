import { GET_GENRES, SET_HAS_MORE_GENRES } from '../actions/genres';

const initialState = {
    genres: [],
    hasMore: true,
}

export const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRES:
            return { ...state, genres: [...state.genres, ...action.payload] }
        case SET_HAS_MORE_GENRES:
            return { ...state, hasMore: action.payload }
        default:
            return state;
    }
}