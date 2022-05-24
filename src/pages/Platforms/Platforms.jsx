import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';
import styled from './Platforms.module.css';

import PlatformCard from '../../components/PlatformCard/PlatformCard';
import Loader from '../../components/Loader/Loader';

const Platforms = () => {
    const platforms = useSelector(state => state.platforms.platforms);
    return (
        <section>
            <h1 className={`${styled.heading} ${reusableStyles.mainHeading}`}>Platforms</h1>
            {platforms.length > 0 ?
                <ul className={reusableStyles.grid}>
                    {platforms.map(platform => <PlatformCard platform={platform} key={platform.id}/>)}
                </ul>
                : <Loader/>}
        </section>
    );
};

export default Platforms;