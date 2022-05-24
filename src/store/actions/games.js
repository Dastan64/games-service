export const LOAD_GAMES = 'LOAD_GAMES';
export const SEARCH_GAMES = 'SEARCH_GAMES';

export const getGames = (platformId = '1,4,18,187', genreId = '2,3,4,5') => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}games?page_size=30&dates=2021-01-01,2022-12-31&genres=${genreId}&platforms=${platformId}&ordering=-added&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
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
