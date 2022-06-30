export const fetchGames = (source, id) => {
    console.log(source, id)
    console.log(`${process.env.REACT_APP_BASE_URL}games?${source}=${id}&page_size=10&ordering=-added&key=${process.env.REACT_APP_API_KEY}`)
    return fetch(`${process.env.REACT_APP_BASE_URL}games?${source}=${id}&page_size=10&ordering=-added&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json()).then(data => data).catch(error => console.error(error))
}