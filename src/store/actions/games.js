export const LOAD_GAMES = 'LOAD_GAMES';
export const LOAD_GAMES_INFO = 'LOAD_GAMES_INFO';
export const SEARCH_GAMES = 'SEARCH_GAMES';
export const SET_HAS_MORE_SEARCHED_GAMES = 'SET_HAS_MORE_SEARCHED_GAMES';
export const SET_HAS_MORE_GAMES = 'SET_HAS_MORE_GAMES';

export const getGamesCount = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}games?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: LOAD_GAMES_INFO,
            payload: data.count
        })).catch(error => console.error(error))
    }
}

export const getGames = (page, platformId = '1,4,18,187', genreId = '2,3,4,5') => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}games?page=${page}&page_size=10&dates=2021-01-01,2022-12-31&genres=${genreId}&platforms=${platformId}&ordering=-added&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => {
            if (!data.next) {
                dispatch({
                    type: SET_HAS_MORE_GAMES,
                    payload: false,
                })
            }
            dispatch({
                type: LOAD_GAMES,
                payload: data.results
            })
        }).catch(error => console.error(error))
    }
}

export const searchGames = (value, page) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}games?search=${value}&page=${page}&page_size=10&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => {
            if (!data.next) {
                dispatch({
                    type: SET_HAS_MORE_SEARCHED_GAMES,
                    payload: false,
                })
            }
            dispatch({
                type: SEARCH_GAMES,
                payload: data.results
            })
        }).catch(error => console.error(error))
    }
}
