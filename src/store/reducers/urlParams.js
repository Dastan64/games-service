const initialState = {
    search: '',
    page: 1,
    page_size: 10,
    stores: '',
    developers: '',
    publishers: '',
    genres: '',
    tags: '',
    creators: '',
    dates: '',
    ordering: '',
}


export const urlParamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_URL_PARAMS':
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            }
        case 'INCREMENT_PAGE':
            return {
                ...state, page: state.page + 1,
            }
        default:
            return state;
    }

}
