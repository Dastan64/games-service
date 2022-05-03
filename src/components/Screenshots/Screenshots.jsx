import React from 'react';
import styles from "./Screenshots.module.css";

const Screenshots = ({screenshots}) => {
    return (
        <div className={styles.screenshotsGrid}>
            {screenshots.map(screenshot => {
                return <div className={styles.screenshotContainer} key={screenshot.id}>
                    <img className={styles.screenshot} src={screenshot.image} alt=""/>
                </div>
            })}
        </div>
    );
};

export default Screenshots;