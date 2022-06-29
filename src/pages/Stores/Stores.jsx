import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import CardsList from '../../components/CardsList/CardsList';
import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller';
import { getStores } from '../../store/actions/stores';

const Stores = () => {
    const stores = useSelector(state => state.stores.stores);
    const hasMoreStores = useSelector(state => state.stores.hasMore);

    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Stores</h1>
            {stores.length > 0 && (
                <InfiniteScroller data={stores} callback={getStores} hasMore={hasMoreStores}>
                    <CardsList data={stores} route={'stores'} type={'stores'}/>
                </InfiniteScroller>
            )}
        </section>
    );
};

export default Stores;