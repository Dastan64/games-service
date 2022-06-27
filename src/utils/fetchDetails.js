export const fetchDetails = (source, id) => {
    return fetch(`${process.env.REACT_APP_BASE_URL}${source}/${id}?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => data).catch(error => console.error(error))
}