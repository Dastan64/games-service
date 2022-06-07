import { GET_DEVELOPERS } from '../actions/developers';

const initialState = {
    developers: [],
}

export const developersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DEVELOPERS:
            return {...state, developers: action.payload}
        default:
            return state;
    }
}