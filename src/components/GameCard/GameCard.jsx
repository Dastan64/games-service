import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import styles from './GameCard.module.css';
import reusableStyles from '../../reusable/reusable.module.css';

import noImage from '../../assets/images/no-image.png';

import {formatDate} from '../../utils/formatDate';
import {platforms as platformsList} from '../../platforms';

const GameCard = ({game}) => {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const cardRef = useRef(null);

    let added,
        name,
        platforms,
        ratings,
        background_image,
        metacritic,
        released,
        slug,
        genres,
        id;
    if (game) {
        ({
            added,
            name,
            platforms,
            ratings,
            genres,
            background_image,
            metacritic,
            released,
            slug,
            id,
        } = game);
    }

    const platformIcons = platforms.map((gamePlatform) => {
        const obj = platformsList.find((platform) =>
            platform.slug.includes(gamePlatform.platform.slug)
        );
        return obj && <img key={uuidv4()} src={obj.img} alt="" draggable="false"/>;
    });

    const ratingNumberStyle = clsx({
        [reusableStyles.lowRating]: metacritic < 50,
        [reusableStyles.midRating]: metacritic >= 50 && metacritic <= 74,
        [reusableStyles.highRating]: metacritic >= 75 && metacritic <= 100,
    });

    const bookmarkBtnStyle = clsx({
        [styles.gameCardBookmarkBtnActive]: isLiked,
    });

    function handleLike(e) {
        e.preventDefault();
        if (!isLiked) {
            dispatch({type: 'ADD_GAME', payload: +cardRef.current.dataset.id});
        }
        setIsLiked(!isLiked);
    }

    return (
        <article className={styles.gameCard} data-id={id} ref={cardRef}>
            <Link to={`/game/${slug}`}>
                <div
                    className={styles.gameCardPoster}
                    style={{
                        backgroundImage: `url(${
                            background_image ? background_image : noImage
                        })`,
                    }}
                >
                    <div className={styles.gameCardOverlay}>
                        <button
                            className={`${styles.gameCardBookmarkBtn} ${bookmarkBtnStyle}`}
                            onClick={handleLike}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="#fff" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.gameCardInfo}>
                    <div className={styles.gameCardPlatforms}>
                        <div className={styles.gameCardPlatformsIcons}>{platformIcons}</div>
                        {metacritic && (
                            <span className={`${styles.gameCardRating} ${ratingNumberStyle}`}>
                {metacritic}
              </span>
                        )}
                    </div>
                    <div className={styles.gameCardTitleContainer}>
                        <h3 className={styles.gameCardTitle}>{name}</h3>
                    </div>
                    <div className={styles.gameCardAddedThumb}>
                        <svg
                            className="SVGInline-svg game-card-button__icon-svg game-card-button__icon_12-svg game-card-button__icon_with-offset-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 12"
                        >
                            <g fill="#fff" fillRule="evenodd">
                                <rect width="3" height="12" x="4.5" rx=".75"></rect>
                                <rect
                                    width="3"
                                    height="12"
                                    x="4.5"
                                    rx=".75"
                                    transform="rotate(-90 6 6)"
                                ></rect>
                            </g>
                        </svg>
                        <span>{added}</span>
                    </div>
                    <ul className={styles.gameCardMoreInfo}>
                        <li>
              <span className={styles.gameCardMoreInfoCaption}>
                Release date:
              </span>
                            <span>{formatDate(released)}</span>
                        </li>
                        <li>
                            <span className={styles.gameMoreInfoCaption}>Genres:</span>
                            <span>{genres.map((genre) => genre.name).join(', ')}</span>
                        </li>
                    </ul>
                </div>
            </Link>
        </article>
    );
};

export default GameCard;
