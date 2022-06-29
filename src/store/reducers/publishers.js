import { GET_PUBLISHERS, SET_HAS_MORE_PUBLISHERS } from '../actions/publishers';

const initialState = {
    publishers: [],
    hasMore: true,
}

export const publishersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PUBLISHERS:
            return { ...state, publishers: [...state.publishers, ...action.payload] }
        case SET_HAS_MORE_PUBLISHERS:
            return { ...state, hasMore: action.payload }
        default:
            return state;
    }
}