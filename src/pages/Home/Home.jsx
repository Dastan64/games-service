import React from 'react';
import GamesList from '../../components/GamesList/GamesList';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

const Home = ({games}) => {
    return (
        <section>
            <h1 className={reusableStyles.mainHeading}>Top Picks</h1>
            <GamesList games={games}/>
        </section>
    );
};

export default Home;