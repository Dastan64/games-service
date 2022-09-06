import React from 'react';
import { useSelector } from 'react-redux';
import GamesList from '../../components/GamesList/GamesList';
import { searchGames } from '../../store/actions/games';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const queryGameTitle = searchParams.get('query');
    const games = useSelector(state => state.games.searchedGames);
    const hasMore = useSelector(state => state.games.hasMoreSearchedGames);
    return <GamesList games={games} hasMore={hasMore} callback={() => searchGames(queryGameTitle, 2)}/>
}

export default SearchPage;
