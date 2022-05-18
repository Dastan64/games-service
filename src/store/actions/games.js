export const LOAD_GAMES = 'LOAD_GAMES';
export const SEARCH_GAMES = 'SEARCH_GAMES';

export const getInitialGames = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}games?dates=2021-01-01,2021-12-31&platforms=18,1,7&ordering=-added&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: LOAD_GAMES,
            payload: data.results
        })).catch(error => console.error(error))
    }
}

export const searchGames = (value) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}games?search=${value}&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: SEARCH_GAMES,
            payload: data.results
        })).catch(error => console.error(error))
    }
}
