import React, { useRef, useState } from 'react';
import styled from './Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Card = ({ obj, data, route, type }) => {
    const [isFollowed, setIsFollowed] = useState(false);
    const { slug, id, image, name, year_start, image_background, games_count, games } = obj ?? {};
    const cardRef = useRef(null);
    const dispatch = useDispatch();

    function handleFollow() {
        const id = +cardRef.current.dataset.id;
        const target = data.find(target => target.id === id);
        if (!isFollowed) {
            dispatch({
                type: 'FOLLOW',
                payload: {
                    ...target,
                    isSolid: true,
                    route: `${route}/${target.slug}`,
                    type: type,
                },
            })
        } else {
            dispatch({
                type: 'UNFOLLOW',
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
            ref={cardRef}
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
                <Link className={styled.cardLink} to={`${slug}`}>
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
                    <p className={styled.cardCount}>{games_count}</p>
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
                                    <span className={styled.cardNumber}>{game.added}</span>
                                </div>
                            );
                        })}
                </div>
            </div>
        </article>
    );
};

export default Card;
