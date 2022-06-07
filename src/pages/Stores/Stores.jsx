import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import CardsList from '../../components/CardsList/CardsList';

const Stores = () => {
    const stores = useSelector(state => state.stores.stores);
    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Stores</h1>
            {stores.length > 0 && <CardsList data={stores} route={'/stores'} type={'store'}/>}
        </section>
    );
};

export default Stores;