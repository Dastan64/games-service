import { GET_STORES } from '../actions/stores';

const initialState = {
    stores: [],
    followedStores: [],
}

export const storesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STORES:
            return {...state, stores: action.payload}
        case 'FOLLOW_PLATFORM':
            return {...state, followedStores: [...state.followedStores, action.payload]}
        case 'UNFOLLOW_PLATFORM':
            return {
                ...state,
                followedStores: state.followedStores.filter(followedStore => followedStore.id !== action.payload)
            }
        default:
            return state;
    }
}