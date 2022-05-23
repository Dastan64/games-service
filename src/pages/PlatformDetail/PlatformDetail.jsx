import React, { useEffect, useState } from 'react';
import styled from './PlatformDetail.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPlatformDetails } from '../../store/actions/platformDetail';
import { getInitialGames } from '../../store/actions/games';
import GamesList from '../../components/GamesList/GamesList';

const PlatformDetail = () => {
    const {platformSlug} = useParams();
    const [platformId, setPlatformId] = useState();
    const platforms = useSelector(state => state.platforms.platforms);
    const games = useSelector(state => state.games.games);
    const dispatch = useDispatch();

    useEffect(() => {
        const id = platforms.find(platform => platform.slug === platformSlug).id;
        setPlatformId(id);
        if (platformId) {
            dispatch(getPlatformDetails(platformId))
            dispatch(getInitialGames(platformId));
        }
    }, [dispatch, platformId, platformSlug, platforms])

    const platformDetails = useSelector(state => state.platformDetails.platformDetails);

    return (
        <div>
            <h1 className={styled.pageHeading}>{platformDetails?.name ? `Games for ${platformDetails.name}` : ''}</h1>
            {platformDetails?.description ?
                <div dangerouslySetInnerHTML={{__html: platformDetails.description}}></div> : ''}
            {games.length > 0 ? <GamesList games={games}/> : <h2>Oops, something happened. Sorry for that!</h2>}
        </div>
    );
};

export default PlatformDetail;