import React, { useEffect, useState } from 'react';
import styled from './PlatformDetail.module.css';

//Hooks
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { getPlatformDetails } from '../../store/actions/platformDetail';
import { getGames } from '../../store/actions/games';

//Components
import GamesList from '../../components/GamesList/GamesList';
import Loader from '../../components/Loader/Loader';

const PlatformDetail = () => {
    const { platformSlug } = useParams();
    const dispatch = useDispatch();
    const [platformId, setPlatformId] = useState();
    const games = useSelector(state => state.games.games);
    const platforms = useSelector(state => state.platforms.platforms);

    useEffect(() => {
        const id = platforms.find(platform => platform.slug === platformSlug).id;
        setPlatformId(id);
        if (platformId) {
            dispatch(getPlatformDetails(platformId))
            dispatch(getGames(platformId));
        }
    }, [dispatch, platformId, platformSlug, platforms])

    const platformDetails = useSelector(state => state.platformDetails.platformDetails);

    return (
        <div>
            <h1 className={styled.pageHeading}>{platformDetails?.name ? `Games for ${platformDetails.name}` : ''}</h1>
            {platformDetails?.description ?
                <div dangerouslySetInnerHTML={{ __html: platformDetails.description }}></div> : ''}
            {games.length > 0 ? <GamesList games={games}/> : <Loader/>}
        </div>
    );
};

export default PlatformDetail;