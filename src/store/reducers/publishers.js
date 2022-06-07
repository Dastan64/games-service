import { GET_PUBLISHERS } from '../actions/publishers';

const initialState = {
    publishers: [],
}

export const publishersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PUBLISHERS:
            return {...state, publishers: action.payload}
        default:
            return state;
    }
}