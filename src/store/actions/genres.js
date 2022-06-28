export const GET_GENRES = 'GET_GENRES';

export const getGenres = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}genres?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
                type: GET_GENRES,
                payload: data.results
            })
        ).catch(error => console.error(error))
    }
}