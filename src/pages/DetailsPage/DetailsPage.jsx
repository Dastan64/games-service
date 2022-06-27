import React, { useEffect, useState } from 'react';
//import styled from '../GenreDetails/GenreDetail.module.css';

//Hooks
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components
import GamesList from '../../components/GamesList/GamesList';
import Loader from '../../components/Loader/Loader';
import { fetchDetails } from '../../utils/fetchDetails';
import { fetchGames } from '../../utils/fetchGames';

const DetailsPage = ({ type }) => {
    const [id, setId] = useState();
    const [details, setDetails] = useState();
    const [games, setGames] = useState([]);
    const { slug } = useParams();
    const data = useSelector(state => state[type][type]);

    useEffect(() => {
        const id = data.find(item => item.slug === slug).id;
        setId(id);
        fetchDetails(type, id).then(data => setDetails(data));
        fetchGames(type, id).then(games => setGames(games.results));
    }, [slug, id, data, type])

    return (
        <div>
            <h1>{details?.name ? `${details.name} Games` : ''}</h1>
            {details?.description ?
                <div dangerouslySetInnerHTML={{ __html: details.description }}></div> : ''}
            {games.length > 0 ? <GamesList games={games}/> : <Loader/>}
        </div>
    );
};

export default DetailsPage;