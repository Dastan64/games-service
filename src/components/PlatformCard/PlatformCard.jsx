import React, {useRef, useState} from 'react';
import styled from './PlatformCard.module.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

const PlatformCard = ({platform}) => {
    const [isFollowed, setIsFollowed] = useState(false);
    const platforms = useSelector(state => state.platforms.platforms);
    const {slug, id, image, name, year_start, image_background, games_count, games} = platform;
    const platformCardRef = useRef(null);
    const dispatch = useDispatch();

    function handleFollow() {
        const id = +platformCardRef.current.dataset.id;
        const specificPlatform = platforms.find(platform => platform.id === id);
        if (!isFollowed) {
            dispatch({
                type: 'FOLLOW_PLATFORM',
                payload: {
                    ...specificPlatform,
                    isSolid: true,
                    route: specificPlatform.slug,
                },
            })
        } else {
            dispatch({
                type: 'UNFOLLOW_PLATFORM',
                payload: id,
            })
        }
        setIsFollowed(!isFollowed);
    }


    return (
        <article
            className={styled.card}
            style={{
                backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%), url(${image_background})`,
            }}
            data-id={id}
            ref={platformCardRef}
        >
            <div className={styled.cardInfo}>
                {image && (
                    <div>
                        <img
                            className={styled.cardImage}
                            src={image}
                            alt={name}
                            draggable={false}
                            loading="lazy"
                        />
                    </div>
                )}
                <Link className={styled.cardLink} to={`/games/${slug}`}>
                    <h3 className={styled.cardName}>{name}</h3>
                </Link>
                {year_start && <p className={styled.yearStart}>
                    {year_start}
                </p>}
            </div>
            <button className={`${styled.cardFollowBtn} ${isFollowed ? styled.cardFollowBtnActive : ''}`} type="button"
                    onClick={handleFollow}>{isFollowed ? 'Following' : 'Follow'}
            </button>
            <div className={styled.cardBottom}>
                <div className={styled.cardTopLine}>
                    <h4>Popular items</h4>
                    <p className={styled.cardNumber}>{games_count}</p>
                </div>
                <div className={styled.cardKnown}>
                    {games.length > 0 &&
                        games.slice(0, 3).map((game) => {
                            return (
                                <div className={styled.cardLine} key={game.id}>
                                    <Link
                                        className={styled.cardGameNameLink}
                                        to={`/game/${game.slug}`}
                                    >
                                        <h4 className={styled.cardGameName}>{game.name}</h4>
                                    </Link>
                                    <p className={styled.cardNumber}>{game.added}</p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </article>
    );
};

export default PlatformCard;