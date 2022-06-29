export const GET_PLATFORMS = 'GET_PLATFORMS';
export const SET_HAS_MORE_PLATFORMS = 'SET_HAS_MORE_PLATFORMS';

export const getPlatforms = (page) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}platforms?page=${page}&page_size=10&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => {
            if (!data.next) {
                dispatch({
                    type: SET_HAS_MORE_PLATFORMS,
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