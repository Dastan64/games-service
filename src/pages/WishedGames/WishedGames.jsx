import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styled from './WishedGames.module.css';

import GamesList from '../../components/GamesList/GamesList';
import { Link } from 'react-router-dom';

const WishedGames = () => {
    const [wishedGames, setWishedGames] = useState([]);
    const games = useSelector(state => state.games.games);
    const wishedGamesIds = useSelector(state => state.games.wishlistGamesIds);

    useEffect(() => {
        const filtered = games.filter(game => wishedGamesIds.indexOf(game.id) !== -1);
        setWishedGames(filtered);
    }, [games, wishedGamesIds])

    return (
        <section>
            {wishedGamesIds.length > 0 ? <GamesList games={wishedGames}/> : (
                <>
                    <h2>No wished games yet.</h2>
                    <Link className={styled.wishedGamesLink} to={'/games'}>Wanna choose one?</Link>
                </>
            )}
        </section>
    );
};

export default WishedGames;