import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import CardsList from '../../components/CardsList/CardsList';

const Creators = () => {
    const creators = useSelector(state => state.creators.creators);
    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Creators</h1>
            {creators.length > 0 && <CardsList data={creators} route={'/creators'} type={'creator'}/>}
        </section>
    );
};

export default Creators;