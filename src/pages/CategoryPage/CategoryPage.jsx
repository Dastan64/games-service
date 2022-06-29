import React from 'react';
import reusableStyles from '../../reusable/reusable.module.css';
import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller';
import CardsList from '../../components/CardsList/CardsList';
import { useSelector } from 'react-redux';

const CategoryPage = ({ category, title, callback }) => {
    const data = useSelector(state => state[category][category]);
    const hasMoreData = useSelector(state => state[category].hasMore);
    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>{title[0].toUpperCase() + title.slice(1)}</h1>
            {data.length > 0 && (
                <InfiniteScroller data={data} hasMore={hasMoreData}
                                  callback={callback}>
                    <CardsList data={data} type={category} route={category}/>
                </InfiniteScroller>
            )
            }
        </section>
    );
};

export default CategoryPage;