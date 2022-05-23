import React from 'react';
import { useSelector } from 'react-redux';

import styled from './Platforms.module.css';

import PlatformCard from '../../components/PlatformCard/PlatformCard';
import Loader from '../../components/Loader/Loader';

const Platforms = () => {
    const platforms = useSelector(state => state.platforms.platforms);
    return (
        <section>
            {platforms.length > 0 ?
                <ul className={styled.platformsGrid}>
                    {platforms.map(platform => <PlatformCard platform={platform} key={platform.id}/>)}
                </ul>
                : <Loader/>}
        </section>
    );
};

export default Platforms;