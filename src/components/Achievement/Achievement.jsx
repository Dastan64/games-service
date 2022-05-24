import React from 'react';
import styles from './Achievement.module.css';

const Achievement = ({achievement}) => {
    const {description, name, percent, image} = achievement ?? {};
    return (
        <div className={styles.achievement}>
            <div className={styles.achievementContainer}>
                <div className={styles.achievementImageContainer}>
                    <img className={styles.achievementImage}
                         src={image}
                         alt=""/>
                </div>
                <div className={styles.achievementInfo}>
                    <p className={styles.achievementPercentage}>{percent}%</p>
                    <h4 className={styles.achievementName}>{name}</h4>
                    <p className={styles.achievementDescription}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Achievement;