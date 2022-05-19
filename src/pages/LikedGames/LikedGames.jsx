import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import styled from './LikedGames.module.css';

import GamesList from '../../components/GamesList/GamesList';
import {Link} from 'react-router-dom';

const LikedGames = () => {
    const [likedGames, setLikedGames] = useState([]);
    const games = useSelector(state => state.games.games);
    const likedGamesIds = useSelector(state => state.games.likedGamesIds);

    useEffect(() => {
        const filtered = games.filter(game => likedGamesIds.indexOf(game.id) !== -1);
        setLikedGames(filtered);
    }, [games, likedGamesIds])

    return (
        <section className={styled.likedGamesSection}>
            {likedGamesIds.length > 0 ? <GamesList games={likedGames}/> : (
                <>
                    <h2>No liked games yet.</h2>
                    <Link className={styled.likedGamesLink} to={'/games'}>Wanna choose one?</Link>
                </>
            )}
        </section>
    );
};

export default LikedGames;