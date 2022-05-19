import {GET_PLATFORMS} from '../actions/platforms';

const initialState = {
    platforms: [],
}

export const platformsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLATFORMS:
            return {platforms: action.payload}
        default:
            return state;
    }
}