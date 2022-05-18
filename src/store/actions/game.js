export const GET_ACHIEVEMENTS = 'GET_ACHIEVEMENTS';
export const GET_GAMES_FROM_SERIES = 'GET_GAMES_FROM_SERIES';
export const GET_DLCS = 'GET_DLCS';
export const GET_SCREENSHOTS = 'GET_SCREENSHOTS';
export const GET_DEVELOPERS = 'GET_DEVELOPERS';

export const getAchievements = (slug) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}${slug}/achievements?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_ACHIEVEMENTS,
            payload: data.results
        })).catch(error => console.error(error))
    }
}

export const getGamesFromSameSeries = (slug) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}${slug}/game-series?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_GAMES_FROM_SERIES,
            payload: data.results,
        })).catch(error => console.error(error))
    }
}

export const getDLCs = (slug) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}${slug}/additions?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_DLCS,
            payload: data.results,
        })).catch(error => console.error(error))
    }
}

export const getScreenshots = (slug) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}${slug}/screenshots?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_SCREENSHOTS,
            payload: data.results,
        })).catch(error => console.error(error))
    }
}

export const getDevelopers = (slug) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}${slug}/development-team?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_DEVELOPERS,
            payload: data.results,
        })).catch(error => console.error(error))
    }
}




