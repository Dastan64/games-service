import React from 'react';
import styles from "./DeveloperCard.module.css";
import {Link} from "react-router-dom";

const DeveloperCard = ({developer}) => {
    const {name, image, image_background, positions} = developer;
    return (
        <article className={styles.card}
                 style={{backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%), url(${image_background})`}}>
            <div className={styles.cardInfo}>
                <div>
                    <img className={styles.cardImage}
                         src={image}
                         alt={name}/>
                </div>
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
                    <p className={styles.cardNumber}>14</p>
                </div>
                <div className={styles.cardKnown}>
                    <div className={styles.cardLine}>
                        <h4>Mad Max</h4>
                        <p className={styles.cardNumber}>6,950</p>
                    </div>
                    <div className={styles.cardLine}>
                        <h4>Mad Max</h4>
                        <p className={styles.cardNumber}>6,950</p>
                    </div>
                    <div className={styles.cardLine}>
                        <h4>Mad Max</h4>
                        <p className={styles.cardNumber}>6,950</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default DeveloperCard;