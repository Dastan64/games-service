export const GET_DEVELOPERS = 'GET_DEVELOPERS';

export const getDevelopers = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}developers?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_DEVELOPERS,
            payload: data.results
        })).catch(error => console.error(error))
    }
}