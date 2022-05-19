import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styled from './Platforms.module.css';

import {getPlatforms} from '../../store/actions/platforms';
import PlatformCard from '../../components/PlatformCard/PlatformCard';

const Platforms = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlatforms());
    }, [dispatch])

    const platforms = useSelector(state => state.platforms.platforms);
    return (
        <section>
            <ul className={styled.platformsGrid}>
                {platforms.map(platform => <PlatformCard platform={platform} key={platform.id}/>)}
            </ul>
        </section>
    );
};

export default Platforms;