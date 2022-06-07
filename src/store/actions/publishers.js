export const GET_PUBLISHERS = 'GET_PUBLISHERS';

export const getPublishers = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}publishers?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_PUBLISHERS,
            payload: data.results
        })).catch(error => console.error(error))
    }
}