import { GET_DETAILS } from '../actions/details';

const initialState = {
    category: {},
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS:
            return { category: { ...action.payload } }
        default:
            return state;
    }
}
