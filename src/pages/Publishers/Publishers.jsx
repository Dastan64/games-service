import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller';
import { getPublishers } from '../../store/actions/publishers';

const Publishers = () => {
    const publishers = useSelector(state => state.publishers.publishers);
    const hasMorePublishers = useSelector(state => state.publishers.hasMore);
    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Publishers</h1>
            {publishers.length > 0 &&
                <InfiniteScroller data={publishers} type={'publishers'} hasMore={hasMorePublishers}
                                  callback={getPublishers}/>}
        </section>
    );
};

export default Publishers;