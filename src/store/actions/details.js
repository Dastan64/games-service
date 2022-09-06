export const GET_DETAILS = 'GET_DETAILS';

export const getDetails = (source, id) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}${source}/${id}?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => {
            dispatch({
                type: GET_DETAILS,
                payload: data,
            })
        }).catch(error => console.error(error))
    }
}
