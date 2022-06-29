import { GET_PLATFORMS, SET_HAS_MORE_PLATFORMS } from '../actions/platforms';

const initialState = {
    platforms: [],
    hasMore: true,
}

export const platformsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLATFORMS:
            return { ...state, platforms: [...state.platforms, ...action.payload] }
        case SET_HAS_MORE_PLATFORMS:
            return { ...state, hasMore: action.payload }
        default:
            return state;
    }
}