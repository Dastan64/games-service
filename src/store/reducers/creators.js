import { GET_CREATORS } from '../actions/creators';

const initialState = {
    creators: [],
}

export const creatorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CREATORS:
            return {...state, creators: action.payload}
        default:
            return state;
    }
}