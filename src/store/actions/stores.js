export const GET_STORES = 'GET_STORES';

export const getStores = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BASE_URL}stores?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => dispatch({
            type: GET_STORES,
            payload: data.results
        })).catch(error => console.error(error))
    }
}