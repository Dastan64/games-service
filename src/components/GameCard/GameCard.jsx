import styles from './GameCard.module.css';
import reusableStyles from '../../reusable/reusable.module.css';
import noImage from '../../assets/images/no-image.png';
import {formatDate} from '../../utils/formatDate';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

const GameCard = ({game}) => {
    let name, platforms, background_image, metacritic, released, slug, genres;

    if (game) {
        ({name, platforms, genres, background_image, metacritic, released, slug} =
            game);
    }

    const ratingNumberStyle = clsx({
        [reusableStyles.lowRating]: metacritic < 50,
        [reusableStyles.midRating]: metacritic >= 50 && metacritic <= 74,
        [reusableStyles.highRating]: metacritic >= 75 && metacritic <= 100,
    });
    return (
        <Link to={`/game/${slug}`}>
            <article className={styles.game}>
                <div
                    className={styles.poster}
                    style={{
                        backgroundImage: `url(${
                            background_image ? background_image : noImage
                        })`,
                    }}
                >
                    <div className={styles.gameCardOverlay}>
                        <button className={styles.gameCardBookmarkBtn}>
                            <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="#fff" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.game__info}>
                    {/*<div className={styles.game__platforms}>*/}
                    {/*    {platforms.length > 0 && platforms.map(platform => <PlatformMiniThumb*/}
                    {/*        platformName={platform.platform.name}*/}
                    {/*        key={platform.platform.id}/>)}*/}
                    {/*</div>*/}
                    <div className={styles.game__bottom}>
                        <h3 className={styles.game__title}>{name}</h3>
                        {metacritic && (
                            <span className={`${styles.game__rating} ${ratingNumberStyle}`}>
                {metacritic}
              </span>
                        )}
                    </div>
                    <ul className={styles.gameMoreInfo}>
                        <li>
                            <span className={styles.gameMoreInfoCaption}>Release date:</span>
                            <span>{formatDate(released)}</span>
                        </li>
                        <li>
                            <span className={styles.gameMoreInfoCaption}>Genres:</span>
                            <span>{genres.map((genre) => genre.name).join(', ')}</span>
                        </li>
                    </ul>
                </div>
            </article>
        </Link>
    );
};

export default GameCard;
