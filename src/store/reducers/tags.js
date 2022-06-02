import { GET_TAGS } from '../actions/tags';

const initialState = {
    genres: [],
}

export const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TAGS:
            return {...state, tags: action.payload}
        default:
            return state;
    }
}