export const GET_PLATFORMS = 'GET_PLATFORMS';
export const SET_HAS_MORE = 'SET_HAS_MORE';

export const getPlatforms = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}platforms?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => {
            if (!data.next) {
                dispatch({
                    type: SET_HAS_MORE,
                    payload: false,
                })
            }
            dispatch({
                type: GET_PLATFORMS,
                payload: data.results
            })
        }).catch(error => console.error(error))
    }
}