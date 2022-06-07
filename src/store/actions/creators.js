export const GET_CREATORS = 'GET_CREATORS';

export const getCreators = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}creators?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_CREATORS,
            payload: data.results
        })).catch(error => console.error(error))
    }
}