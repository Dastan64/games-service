import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import CardsList from '../../components/CardsList/CardsList';

const Platforms = () => {
    const platforms = useSelector(state => state.platforms.platforms);
    return (
        <section>
            <h1 className={`${reusableStyles.pageHeading} ${reusableStyles.mainHeading}`}>Platforms</h1>
            {platforms.length > 0 && <CardsList data={platforms} route={'/games'} type={'platforms'}/>}
        </section>
    );
};

export default Platforms;