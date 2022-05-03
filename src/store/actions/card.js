export const GET_ACHIEVEMENTS = "GET_ACHIEVEMENTS";
export const GET_GAMES_FROM_SERIES = "GET_GAMES_FROM_SERIES";
export const GET_DLCS = "GET_DLCS";
export const GET_SCREENSHOTS = "GET_SCREENSHOTS";
export const GET_DEVELOPERS = "GET_DEVELOPERS";

const BASE_URL = "https://api.rawg.io/api/games";

export const getAchievements = (slug) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/${slug}/achievements?key=3f440a1115914382a87c089c5251f2a7`).then(response => response.json()).then(data => dispatch({
            type: GET_ACHIEVEMENTS,
            payload: data.results
        })).catch(error => console.error(error))
    }
}

export const getGamesFromSameSeries = (slug) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/${slug}/game-series?key=3f440a1115914382a87c089c5251f2a7`).then(response => response.json()).then(data => dispatch({
            type: GET_GAMES_FROM_SERIES,
            payload: data.results,
        })).catch(error => console.error(error))
    }
}

export const getDLCs = (slug) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/${slug}/additions?key=3f440a1115914382a87c089c5251f2a7`).then(response => response.json()).then(data => dispatch({
            type: GET_DLCS,
            payload: data.results,
        })).catch(error => console.error(error))
    }
}

export const getScreenshots = (slug) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/${slug}/screenshots?key=3f440a1115914382a87c089c5251f2a7`).then(response => response.json()).then(data => dispatch({
            type: GET_SCREENSHOTS,
            payload: data.results,
        })).catch(error => console.error(error))
    }
}

export const getDevelopers = (slug) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/${slug}/development-team?key=3f440a1115914382a87c089c5251f2a7`).then(response => response.json()).then(data => dispatch({
            type: GET_DEVELOPERS,
            payload: data.results,
        })).catch(error => console.error(error))
    }
}




