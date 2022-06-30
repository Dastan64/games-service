import React from 'react';
import GamesList from '../../components/GamesList/GamesList';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';
import { useSelector } from 'react-redux';

const Home = () => {
    const games = useSelector(state => state.games.games);
    const hasMoreGames = useSelector(state => state.games.hasMore);
    return (
        <section>
            <h1 className={reusableStyles.mainHeading}>Top Picks</h1>
            <GamesList games={games} hasMore={hasMoreGames}/>
        </section>
    );
};

export default Home;