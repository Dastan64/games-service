import React, { useEffect, useMemo, useState } from 'react';
import styled from '../DetailsPage/DetailsPage.module.css';

//Hooks
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//Components
import GamesList from '../../components/GamesList/GamesList';
import Loader from '../../components/Loader/Loader';

//Utils
import { getDetails } from '../../store/actions/details';
import { clearGames, getGames } from '../../store/actions/games';
import { formatTitle } from '../../utils/formatTitle';

const DetailsPage = ({ source }) => {
    const data = useSelector(state => state[source][source]);
    const games = useSelector(state => state.games.games);
    const details = useSelector(state => state.details.category);
    const hasMoreGames = useSelector(state => state.games.hasMore);
    const dispatch = useDispatch();
    const { slug } = useParams();
    const id = useMemo(() => data.find(item => item.slug === slug)?.id, [data, slug]);
    const params = { source, id }

    useEffect(() => {
        if (id) {
            dispatch(getDetails(source, id));
            dispatch(getGames(1, source, id));
        }
    }, [data, dispatch, id, source])

    useEffect(() => {
        if (games.length > 0) {
            dispatch(clearGames())
        }
    }, [dispatch])

    return (
        <div>
            <h1 className={styled.detailsTitle}>{details?.name ? formatTitle(source, details.name) : ''}</h1>
            {details?.description ?
                <div className={styled.detailsText}
                     dangerouslySetInnerHTML={{ __html: details.description }}></div> : ''}
            {games.length > 0 ?
                <GamesList games={games} hasMore={hasMoreGames} callback={getGames} params={params}/> :
                <Loader/>}
        </div>
    );
};

export default DetailsPage;
