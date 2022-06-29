export const GET_TAGS = 'GET_TAGS';
export const SET_HAS_MORE_TAGS = 'SET_HAS_MORE_TAGS';

export const getTags = (page) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}tags?page=${page}&page_size=10&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => {
            if (!data.next) {
                dispatch({
                    type: SET_HAS_MORE_TAGS,
                    payload: false,
                })
            }
            dispatch({
                type: GET_TAGS,
                payload: data.results
            })
        }).catch(error => console.error(error))
    }
}