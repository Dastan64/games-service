export const GET_STORES = 'GET_STORES';
export const SET_HAS_MORE_STORES = 'SET_HAS_MORE_STORES';

export const getStores = (page) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}stores?page=${page}&page_size=10&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => {
                if (!data.next) {
                    dispatch({
                        type: SET_HAS_MORE_STORES,
                        payload: false,
                    })
                }
                dispatch({
                    type: GET_STORES,
                    payload: data.results,
                })
            }
        ).catch(error => console.error(error))
    }
}