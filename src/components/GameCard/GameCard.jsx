import styles from "./GameCard.module.css";
import noImage from "../../assets/images/no-image.png";
import {formatDate} from "../../utils/formatDate";
import {Link} from "react-router-dom";

const GameCard = ({game}) => {
    let name, platforms, background_image, metacritic, released, slug, genres;

    if (game) {
        ({name, platforms, genres, background_image, metacritic, released, slug} = game)
    }
    return (
        <Link to={`/game/${slug}`}>
            <article className={styles.game}>
                <div>
                    {background_image ? <img src={background_image} alt={name} className={styles.game__poster}
                                             loading="lazy"/> :
                        <img src={noImage} alt={name} className={styles.game__poster}
                             loading="lazy"/>}
                </div>
                <div className={styles.game__info}>
                    {/*<div className={styles.game__platforms}>*/}
                    {/*    {platforms.length > 0 && platforms.map(platform => <PlatformMiniThumb*/}
                    {/*        platformName={platform.platform.name}*/}
                    {/*        key={platform.platform.id}/>)}*/}
                    {/*</div>*/}
                    <div className={styles.game__bottom}>
                        <h3 className={styles.game__title}>{name}</h3>
                        {metacritic && <span className={styles.game__rating}>{metacritic}</span>}
                    </div>
                    <ul className={styles.gameMoreInfo}>
                        <li><span
                            className={styles.gameMoreInfoCaption}>Release date:</span><span>{formatDate(released)}</span>
                        </li>
                        <li><span
                            className={styles.gameMoreInfoCaption}>Genres:</span><span>{genres.map(genre => genre.name).join(", ")}</span>
                        </li>
                    </ul>
                </div>

            </article>
        </Link>
    );
};

export default GameCard;