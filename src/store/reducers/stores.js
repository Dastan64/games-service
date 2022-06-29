import { GET_STORES, SET_HAS_MORE_STORES } from '../actions/stores';

const initialState = {
    stores: [],
    hasMore: true,
}

export const storesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STORES:
            return { ...state, stores: [...state.stores, ...action.payload] }
        case SET_HAS_MORE_STORES:
            return { ...state, hasMore: action.payload }
        default:
            return state;
    }
}