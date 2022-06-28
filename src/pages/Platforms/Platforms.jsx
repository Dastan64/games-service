import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller';
import { getPlatforms } from '../../store/actions/platforms';

const Platforms = () => {
    const platforms = useSelector(state => state.platforms.platforms);
    const hasMorePlatforms = useSelector(state => state.platforms.hasMore);
    return (
        <section>
            <h1 className={`${reusableStyles.pageHeading} ${reusableStyles.mainHeading}`}>Platforms</h1>
            {platforms.length > 0 && <InfiniteScroller data={platforms} callback={getPlatforms} type={'platforms'}
                                                       hasMore={hasMorePlatforms}/>}
        </section>
    );
};

export default Platforms;