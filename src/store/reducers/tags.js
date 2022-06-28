import { GET_TAGS, SET_HAS_MORE } from '../actions/tags';

const initialState = {
    tags: [],
    hasMore: true,
}

export const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TAGS:
            return { ...state, tags: [...state.tags, ...action.payload] }
        case SET_HAS_MORE:
            return { ...state, hasMore: action.payload }
        default:
            return state;
    }
}