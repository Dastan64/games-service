import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller';
import { getTags } from '../../store/actions/tags';

const Tags = () => {
    const tags = useSelector(state => state.tags.tags);
    const hasMoreTags = useSelector(state => state.tags.hasMore);

    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Tags</h1>
            {tags.length > 0 && <InfiniteScroller data={tags} type={'tags'} hasMore={hasMoreTags} callback={getTags}/>}
        </section>
    );
};

export default Tags;