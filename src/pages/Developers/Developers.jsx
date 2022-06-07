import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import CardsList from '../../components/CardsList/CardsList';

const Developers = () => {
    const developers = useSelector(state => state.developers.developers);
    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Developers</h1>
            {developers.length > 0 && <CardsList data={developers} route={'/developers'} type={'developer'}/>}
        </section>
    );
};

export default Developers;