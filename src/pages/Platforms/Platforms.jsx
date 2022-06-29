import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller';
import { getPlatforms } from '../../store/actions/platforms';
import CardsList from '../../components/CardsList/CardsList';

const Platforms = () => {
    const platforms = useSelector(state => state.platforms.platforms);
    const hasMorePlatforms = useSelector(state => state.platforms.hasMore);
    return (
        <section>
            <h1 className={`${reusableStyles.pageHeading} ${reusableStyles.mainHeading}`}>Platforms</h1>
            {platforms.length > 0 && (
                <InfiniteScroller data={platforms} callback={getPlatforms} type={'platforms'}
                                  hasMore={hasMorePlatforms}>
                    <CardsList data={platforms} type={'platforms'} route={`platforms`}/>
                </InfiniteScroller>
            )}
        </section>
    );
};

export default Platforms;