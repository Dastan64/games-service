import React from 'react';
import styles from "./DeveloperCard.module.css";
import {Link} from "react-router-dom";

const DeveloperCard = ({developer}) => {
    const {name, image, image_background, positions, games_count, games} = developer;
    return (
        <article className={styles.card}
                 style={{backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%), url(${image_background})`}}>
            <div className={styles.cardInfo}>
                {image && <div>
                    <img className={styles.cardImage}
                         src={image}
                         alt={name}
                         draggable={false}
                    />
                </div>}
                <Link className={styles.cardLink} to={"/"}>
                    <h3 className={styles.cardName}>{name}</h3>
                </Link>
                {positions.length > 0 && positions.map(position => <p key={position.id}
                                                                      className={styles.cardRole}>{position.name.charAt(0).toUpperCase() + position.name.slice(1)}</p>
                )}
            </div>
            <div className={styles.cardBottom}>
                <div className={styles.cardTopLine}>
                    <h4>Known for</h4>
                    <p className={styles.cardNumber}>{games_count}</p>
                </div>
                <div className={styles.cardKnown}>
                    {games.length > 0 && games.map(game => {
                        return (<div className={styles.cardLine} key={game.id}>
                            <Link className={styles.cardGameNameLink} to={`/game/${game.slug}`}>
                                <h4 className={styles.cardGameName}>{game.name}</h4>
                            </Link>
                            <p className={styles.cardNumber}>{game.added}</p>
                        </div>)
                    })}
                </div>
            </div>
        </article>
    );
};

export default DeveloperCard;