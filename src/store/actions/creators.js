export const GET_CREATORS = 'GET_CREATORS';
export const SET_HAS_MORE_CREATORS = 'SET_HAS_MORE_CREATORS';

export const getCreators = (page) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}creators?page=${page}&page_size=10&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => {
            if (!data.next) {
                dispatch({
                    type: SET_HAS_MORE_CREATORS,
                    payload: false,
                })
            }
            dispatch({
                type: GET_CREATORS,
                payload: data.results
            })
        }).catch(error => console.error(error))
    }
}