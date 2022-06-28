import { GET_DEVELOPERS, SET_HAS_MORE } from '../actions/developers';

const initialState = {
    developers: [],
    hasMore: true,
}

export const developersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DEVELOPERS:
            return { ...state, developers: [...state.developers, ...action.payload] }
        case SET_HAS_MORE:
            return { ...state, hasMore: action.payload }
        default:
            return state;
    }
}