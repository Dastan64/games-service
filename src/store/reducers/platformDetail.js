import {GET_PLATFORM_DETAILS} from '../actions/platformDetail';

const initialState = {
    platformDetails: [],
}

export const platformDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLATFORM_DETAILS:
            return {...state, platformDetails: [...state.platformDetails, action.payload]}
        default:
            return state;
    }
}