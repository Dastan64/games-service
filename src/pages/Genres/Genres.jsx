import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import CardsList from '../../components/CardsList/CardsList';
import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller';
import { getGenres } from '../../store/actions/genres';

const Genres = () => {
    const genres = useSelector(state => state.genres.genres);
    const hasMoreGenres = useSelector(state => state.genres.hasMore);

    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Genres</h1>
            {genres.length > 0 && (
                <InfiniteScroller data={genres} hasMore={hasMoreGenres} callback={getGenres}>
                    <CardsList data={genres} route={'genres'} type={'genres'}/>
                </InfiniteScroller>
            )}
        </section>
    );
};

export default Genres;