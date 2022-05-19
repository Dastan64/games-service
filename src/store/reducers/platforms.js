import {GET_PLATFORMS} from '../actions/platforms';

const initialState = {
    platforms: [],
    followedPlatforms: [],
}

export const platformsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLATFORMS:
            return {...state, platforms: action.payload}
        case 'FOLLOW_PLATFORM':
            return {...state, followedPlatforms: [...state.followedPlatforms, action.payload]}
        default:
            return state;
    }
}