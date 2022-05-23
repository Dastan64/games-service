export const GET_GENRE_DETAILS = 'GET_GENRE_DETAILS';

export const getGenreDetails = (id) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}genres/${id}?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_GENRE_DETAILS,
            payload: data,
        })).catch(error => console.error(error))
    }
}