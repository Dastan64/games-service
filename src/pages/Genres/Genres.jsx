import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import CardsList from '../../components/CardsList/CardsList';

const Genres = () => {
    const genres = useSelector(state => state.genres.genres);
    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Genres</h1>
            {genres.length > 0 && <CardsList data={genres} route={'/genres'} type={'genre'}/>}
        </section>
    );
};

export default Genres;