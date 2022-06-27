import React, { useEffect, useState } from 'react';
import styled from '../DetailsPage/DetailsPage.module.css';

//Hooks
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components
import GamesList from '../../components/GamesList/GamesList';
import Loader from '../../components/Loader/Loader';

//Utils
import { fetchDetails } from '../../utils/fetchDetails';
import { fetchGames } from '../../utils/fetchGames';

const DetailsPage = ({ source }) => {
    const [id, setId] = useState();
    const [details, setDetails] = useState();
    const [games, setGames] = useState([]);
    const { slug } = useParams();
    const data = useSelector(state => state[source][source]);

    useEffect(() => {
        const id = data.find(item => item.slug === slug).id;
        setId(id);
        fetchDetails(source, id).then(data => setDetails(data));
        fetchGames(source, id).then(games => setGames(games.results));
    }, [slug, id, data, source])

    const formatTitle = (source, title) => {
        switch (source) {
            case 'developers':
                return `Developed by ${title}`;
            case 'publishers':
                return `Published by ${title}`;
            default:
                return title;
        }
    }

    return (
        <div>
            <h1 className={styled.detailsTitle}>{details?.name ? formatTitle(source, details.name) : ''}</h1>
            {details?.description ?
                <div className={styled.detailsText}
                     dangerouslySetInnerHTML={{ __html: details.description }}></div> : ''}
            {games.length > 0 ? <GamesList games={games}/> : <Loader/>}
        </div>
    );
};

export default DetailsPage;