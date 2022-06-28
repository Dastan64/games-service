export const GET_DEVELOPERS = 'GET_DEVELOPERS';
export const SET_HAS_MORE = 'SET_HAS_MORE';

export const getDevelopers = (page) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}developers?page=${page}&page_size=10&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => {
            if (!data.next) {
                dispatch({
                    type: SET_HAS_MORE,
                    payload: false,
                })
            }
            dispatch({
                type: GET_DEVELOPERS,
                payload: data.results
            })
        }).catch(error => console.error(error))
    }
}