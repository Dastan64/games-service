import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import { getCreators } from '../../store/actions/creators';
import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller';

const Creators = () => {
    const creators = useSelector(state => state.creators.creators);
    const hasMoreCreators = useSelector(state => state.creators.hasMore);

    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Creators</h1>
            {creators.length > 0 && (
                <InfiniteScroller type={'creators'} callback={getCreators} data={creators} hasMore={hasMoreCreators}/>
            )}
        </section>
    );
};

export default Creators;