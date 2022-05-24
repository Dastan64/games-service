import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';
import styled from './Stores.module.css';

import Loader from '../../components/Loader/Loader';
import StoreCard from '../../components/StoreCard/StoreCard';

const Stores = () => {
    const stores = useSelector(state => state.stores.stores);
    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${styled.heading}`}>Stores</h1>
            {stores.length > 0 ?
                <ul className={reusableStyles.grid}>
                    {stores.map(store => <StoreCard store={store} key={store.id}/>)}
                </ul>
                : <Loader/>}
        </section>
    );
};

export default Stores;