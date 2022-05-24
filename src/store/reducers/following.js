const initialState = {
    following: [],
}

export const followingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {following: [...state.following, action.payload]}
        case 'UNFOLLOW':
            return {
                following: state.following.filter(following => following.id !== action.payload)
            }
        default:
            return state;
    }
}