const initialState = {
    games: [],
}

export const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_GAMES":
            return {...state, games: action.payload}
        case "SEARCH_GAMES":
            return {...state, games: action.payload}
        default:
            return state;
    }
}

