import React from 'react';
import GamesList from '../../components/GamesList/GamesList';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';
import styled from './Home.module.css';
import { useSelector } from 'react-redux';
import { getGames } from '../../store/actions/games';

//Components
import MobileNav from '../../components/MobileNav/MobileNav';

const Home = ({ isMobileMenuActive, setIsMobileMenuActive }) => {
    const games = useSelector(state => state.games.games);
    const hasMoreGames = useSelector(state => state.games.hasMore);

    return (
        <section>
            <MobileNav active={isMobileMenuActive} setIsMobileMenuActive={setIsMobileMenuActive}/>
            <h1 className={`${reusableStyles.mainHeading} ${styled.homepageTitle}`}>Top Picks</h1>
            <GamesList games={games} hasMore={hasMoreGames} callback={getGames}/>
        </section>
    );
};

export default Home;
