import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller';
import { getTags } from '../../store/actions/tags';
import CardsList from '../../components/CardsList/CardsList';

const Tags = () => {
    const tags = useSelector(state => state.tags.tags);
    const hasMoreTags = useSelector(state => state.tags.hasMore);

    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Tags</h1>
            {tags.length > 0 && (
                <InfiniteScroller data={tags} hasMore={hasMoreTags} callback={getTags}>
                    <CardsList data={tags} type={'tags'} route={'tags'}/>
                </InfiniteScroller>
            )}
        </section>
    );
};

export default Tags;