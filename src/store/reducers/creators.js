import { GET_CREATORS, SET_HAS_MORE_CREATORS } from '../actions/creators';

const initialState = {
    creators: [],
    hasMore: true,
}

export const creatorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CREATORS:
            return { ...state, creators: [...state.creators, ...action.payload] }
        case SET_HAS_MORE_CREATORS:
            return { ...state, hasMore: action.payload }
        default:
            return state;
    }
}