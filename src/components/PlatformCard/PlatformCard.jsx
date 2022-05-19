import React from 'react';
import styled from './PlatformCard.module.css';
import {Link} from 'react-router-dom';

const PlatformCard = ({platform}) => {
    const {image, name, image_background, games_count, games} = platform;
    return (
        <article
            className={styled.card}
            style={{
                backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%), url(${image_background})`,
            }}
        >
            <div className={styled.cardInfo}>
                {image && (
                    <div>
                        <img
                            className={styled.cardImage}
                            src={image}
                            alt={name}
                            draggable={false}
                        />
                    </div>
                )}
                <Link className={styled.cardLink} to={'/'}>
                    <h3 className={styled.cardName}>{name}</h3>
                </Link>
            </div>
            <button className={styled.cardFollowBtn} type="button">Follow</button>

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