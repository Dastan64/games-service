const initialState = {
    games: [],
    bookmarkedGames: [],
}

export const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_GAMES":
            return { ...state, games: action.payload }
        case "SEARCH_GAMES":
            return { ...state, games: action.payload }
        case "ADD_GAME":
            return { ...state, bookmarkedGames: [...state.bookmarkedGames, action.payload] }
        default:
            return state;
    }
}

