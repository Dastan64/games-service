export const GET_GENRES = 'GET_GENRES';
export const SET_HAS_MORE_GENRES = 'SET_HAS_MORE_GENRES';

export const getGenres = (page) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}genres?page=${page}&page_size=10&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => {
                if (!data.next) {
                    dispatch({
                        type: SET_HAS_MORE_GENRES,
                        payload: false,
                    })
                }
                dispatch({
                    type: GET_GENRES,
                    payload: data.results
                })
            }
        ).catch(error => console.error(error))
    }
}