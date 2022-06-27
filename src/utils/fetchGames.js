export const fetchGames = (type, id) => {
    console.log(id);
    console.log(`${process.env.REACT_APP_BASE_URL}games?page_size=30&${type}=${id}&ordering=-added&key=${process.env.REACT_APP_API_KEY}`)
    return fetch(`${process.env.REACT_APP_BASE_URL}games?page_size=30&${type}=${id}&ordering=-added&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => data).catch(error => console.error(error))
}