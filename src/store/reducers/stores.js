import { GET_STORES } from '../actions/stores';

const initialState = {
    stores: [],
}

export const storesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STORES:
            return { ...state, stores: [...state.stores, ...action.payload] }
        default:
            return state;
    }
}