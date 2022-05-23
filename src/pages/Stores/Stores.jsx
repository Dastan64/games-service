import React from 'react';
import { useSelector } from 'react-redux';

import styled from '../Platforms/Platforms.module.css'

import Loader from '../../components/Loader/Loader';
import StoreCard from '../../components/StoreCard/StoreCard';

const Stores = () => {
    const stores = useSelector(state => state.stores.stores);
    return (
        <section>
            {stores.length > 0 ?
                <ul className={styled.platformsGrid}>
                    {stores.map(store => <StoreCard store={store} key={store.id}/>)}
                </ul>
                : <Loader/>}
        </section>
    );
};

export default Stores;