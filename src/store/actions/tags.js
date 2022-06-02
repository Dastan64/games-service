export const GET_TAGS = 'GET_TAGS';

export const getTags = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}tags?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_TAGS,
            payload: data.results
        })).catch(error => console.error(error))
    }
}