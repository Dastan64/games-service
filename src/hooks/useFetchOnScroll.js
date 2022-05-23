import { useState, useEffect, useCallback } from 'react';

const useFetchOnScroll = (query, page) => {
    const [list, setList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    const fetchGames = useCallback(async () => {
        try {
            await setIsFetching(true);
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}games?page=${page}&key=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            await setList(prevGames => [...prevGames, data.results]);
            setIsFetching(false);
        } catch (error) {
            setError(error);
        }
    }, [page])

    useEffect(() => {
        fetchGames(query, page)
    }, [query, fetchGames, page])

    return {list, isFetching, error};
};

export default useFetchOnScroll;