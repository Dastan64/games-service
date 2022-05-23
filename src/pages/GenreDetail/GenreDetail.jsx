import React, { useEffect, useState } from 'react';
import styled from './GenreDetail.module.css';

//Hooks
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { getGenreDetails } from '../../store/actions/genreDetail';
import { getGames } from '../../store/actions/games';

//Components
import GamesList from '../../components/GamesList/GamesList';
import Loader from '../../components/Loader/Loader';

const GenreDetail = () => {
    const {genreSlug} = useParams();
    const [genreId, setGenreId] = useState();
    const games = useSelector(state => state.games.games);
    const genres = useSelector(state => state.genres.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        const id = genres.find(genre => genre.slug === genreSlug).id;
        setGenreId(id);
        if (genreId) {
            dispatch(getGenreDetails(genreId))
            dispatch(getGames(undefined, genreId));
        }
    }, [dispatch, genreId, genreSlug, genres])

    const genreDetails = useSelector(state => state.genreDetails.genreDetails);

    return (
        <div>
            <h1 className={styled.pageHeading}>{genreDetails?.name ? `${genreDetails.name} Games` : ''}</h1>
            {genreDetails?.description ?
                <div dangerouslySetInnerHTML={{__html: genreDetails.description}}></div> : ''}
            {games.length > 0 ? <GamesList games={games}/> : <Loader/>}
        </div>
    );
};

export default GenreDetail;