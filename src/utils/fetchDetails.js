export const fetchDetails = (type, id) => {
    return fetch(`${process.env.REACT_APP_BASE_URL}${type}/${id}?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => data).catch(error => console.error(error))
}