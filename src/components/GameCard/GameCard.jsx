import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import styled from './GameCard.module.css';
import reusablestyles from '../../reusable/reusable.module.css';

import noImage from '../../assets/images/no-image.png';

import { formatDate } from '../../utils/formatDate';
import { platforms as platformsList } from '../../platforms';

const GameCard = ({game}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isWished, setIsWished] = useState(false);
    const dispatch = useDispatch();
    const cardRef = useRef(null);

    const {added, name, platforms, genres, background_image, metacritic, released, slug, id} = game ?? {}

    const platformIcons = platforms && platforms.map((gamePlatform) => {
        const obj = platformsList.find((platform) =>
            platform.slug.includes(gamePlatform.platform.slug)
        );
        return obj && <img key={uuidv4()} src={obj.img} alt="" draggable="false"/>;
    });

    const ratingNumberStyle = clsx({
        [reusablestyles.lowRating]: metacritic < 50,
        [reusablestyles.midRating]: metacritic >= 50 && metacritic <= 74,
        [reusablestyles.highRating]: metacritic >= 75 && metacritic <= 100,
    });

    const overlayStyle = clsx({
        [styled.gameCardOverlayRemoved]: isLiked,
    })

    const bookmarkBtnStyle = clsx({
        [styled.gameCardBookmarkBtnActive]: isLiked,
    });

    const wishlistBtnStyle = clsx({
        [styled.gameCardWishlistBtnActive]: isWished,
    });

    function handleLike(e) {
        e.preventDefault();
        if (!isLiked) {
            dispatch({type: 'LIKE_GAME', payload: +cardRef.current.dataset.id});
        } else {
            dispatch({type: 'UNLIKE_GAME', payload: +cardRef.current.dataset.id});
        }
        setIsLiked(!isLiked);
    }

    function handleWish(e) {
        e.preventDefault();
        if (!isWished) {
            dispatch({type: 'WISH_GAME', payload: +cardRef.current.dataset.id});
        } else {
            dispatch({type: 'UNWISH_GAME', payload: +cardRef.current.dataset.id});
        }
        setIsWished(!isWished);
    }

    return (
        <article className={styled.gameCard} data-id={id} ref={cardRef}>
            <Link to={`/game/${slug}`}>
                <div
                    className={styled.gameCardPoster}
                    style={{
                        backgroundImage: `url(${
                            background_image ? background_image : noImage
                        })`,
                    }}>
                    <div className={`${styled.gameCardOverlay} ${overlayStyle}`}>
                        <button
                            className={`${styled.gameCardBookmarkBtn} ${bookmarkBtnStyle}`}
                            onClick={handleLike}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="#fff" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styled.gameCardInfo}>
                    <div className={styled.gameCardPlatforms}>
                        <div className={styled.gameCardPlatformsIcons}>{platformIcons}</div>
                        {metacritic && (
                            <span className={`${styled.gameCardRating} ${ratingNumberStyle}`}>
                {metacritic}
              </span>)}
                    </div>
                    <div className={styled.gameCardTitleContainer}>
                        <h3 className={styled.gameCardTitle}>{name}</h3>
                    </div>
                    <div className={styled.gameCardBottom}>
                        <div className={styled.gameCardAddedThumb}>
                            <svg
                                className="SVGInline-svg game-card-button__icon-svg game-card-button__icon_12-svg game-card-button__icon_with-offset-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 12 12">
                                <g fill="#fff" fillRule="evenodd">
                                    <rect width="3" height="12" x="4.5" rx=".75"></rect>
                                    <rect
                                        width="3"
                                        height="12"
                                        x="4.5"
                                        rx=".75"
                                        transform="rotate(-90 6 6)"></rect>
                                </g>
                            </svg>
                            <span>{added}</span>
                        </div>
                        <button className={`${styled.gameCardWishlistBtn} ${wishlistBtnStyle}`} onClick={handleWish}>
                            <svg className={styled.gameCardWishlistIcon} xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 30 30">
                                <path fill="#FFF"
                                      d="M25.5 9.846h-4.746a5.87 5.87 0 00.837-.657 3.027 3.027 0 000-4.32c-1.175-1.158-3.223-1.159-4.4 0-.649.639-2.375 3.24-2.137 4.977h-.108c.237-1.738-1.488-4.339-2.138-4.978-1.176-1.158-3.224-1.157-4.4 0a3.028 3.028 0 000 4.321c.205.203.498.429.838.657H4.5A1.487 1.487 0 003 11.314v3.672c0 .405.336.734.75.734h.75v8.812c.004.813.675 1.47 1.5 1.468h18a1.487 1.487 0 001.5-1.468V15.72h.75c.414 0 .75-.329.75-.734v-3.672a1.487 1.487 0 00-1.5-1.468zM9.472 5.904a1.61 1.61 0 011.138-.464c.427 0 .83.164 1.135.464 1.011.995 2.016 3.54 1.667 3.893 0 0-.064.048-.278.048-1.036 0-3.015-1.054-3.662-1.691a1.578 1.578 0 010-2.25zm4.778 18.628H6V15.72h8.25v8.812zm0-10.28H4.5v-2.938h9.75v2.938zm4.005-8.348c.609-.598 1.665-.597 2.273 0a1.578 1.578 0 010 2.25c-.647.637-2.626 1.692-3.662 1.692-.214 0-.278-.047-.279-.049-.348-.354.657-2.898 1.668-3.893zM24 24.532h-8.25V15.72H24v8.812zm1.5-10.28h-9.75v-2.938h9.75v2.938z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className={styled.gameCardMoreInfo}>
                        <li>
              <span className={styled.gameCardMoreInfoCaption}>
                Release date:
              </span>
                            <span>{formatDate(released)}</span>
                        </li>
                        <li>
                            <span className={styled.gameMoreInfoCaption}>Genres:</span>
                            <span>{genres.map((genre) => genre.name).join(', ')}</span>
                        </li>
                    </ul>
                </div>
            </Link>
        </article>
    );
};

export default GameCard;
