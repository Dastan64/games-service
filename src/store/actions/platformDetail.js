export const GET_PLATFORM_DETAILS = 'GET_PLATFORM_DETAILS';

export const getPlatformDetails = (id) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}platforms/${id}?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_PLATFORM_DETAILS,
            payload: data,
        })).catch(error => console.error(error))
    }
}