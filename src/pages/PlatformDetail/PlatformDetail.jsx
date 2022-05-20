import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getPlatformDetails} from '../../store/actions/platformDetail';

const PlatformDetail = () => {
    const [platformId, setPlatformId] = useState();
    const {platformSlug} = useParams();
    const platforms = useSelector(state => state.platforms.platforms);
    const dispatch = useDispatch();

    useEffect(() => {
        const id = platforms.find(platform => platform.slug === platformSlug).id;
        setPlatformId(id);
        if (platformId) {
            dispatch(getPlatformDetails(platformId))
        }
    }, [dispatch, platformId, platformSlug, platforms])

    const platformDetails = useSelector(state => state.platformDetails.platformDetails);
    

    return (
        <div>
            <h2>{platformDetails[0]?.name ? `Games for ${platformDetails[0].name}` : ''}</h2>
            {platformDetails[0]?.description ?
                <div dangerouslySetInnerHTML={{__html: platformDetails[0].description}}></div> : ''}
        </div>
    );
};

export default PlatformDetail;