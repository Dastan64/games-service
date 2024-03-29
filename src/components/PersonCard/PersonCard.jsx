import React from 'react';
import styled from './PersonCard.module.css';
import { Link } from 'react-router-dom';

const PersonCard = ({ developer }) => {
    const { name, image, slug, image_background, positions, games_count, games } = developer ?? {};

    return (
        <article className={styled.card} style={{
            backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%), url(${image_background})`,
        }}>
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
                <Link className={styled.cardLink} to={`/creators/${slug}`}>
                    <h3 className={styled.cardName}>{name}</h3>
                </Link>
                <div className={styled.cardPositions}>
                    {positions.length > 0 &&
                        positions.map((position, index) => (
                            <span key={position.id} className={styled.cardRole}>
                                {(index ? ', ' : '') + position.name.charAt(0).toUpperCase() + position.name.slice(1)}
                            </span>
                        ))}
                </div>
            </div>
            <div className={styled.cardBottom}>
                <div className={styled.cardTopLine}>
                    <h4>Known for</h4>
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

export default PersonCard;
