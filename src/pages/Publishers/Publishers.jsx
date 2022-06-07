import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import CardsList from '../../components/CardsList/CardsList';

const Publishers = () => {
    const publishers = useSelector(state => state.publishers.publishers);
    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Publishers</h1>
            {publishers.length > 0 && <CardsList data={publishers} route={'/publishers'} type={'publisher'}/>}
        </section>
    );
};

export default Publishers;