import { GET_GENRE_DETAILS } from '../actions/genreDetail';

const initialState = {
    genreDetails: [],
}

export const genreDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRE_DETAILS:
            return {genreDetails: action.payload}
        default:
            return state;
    }
}