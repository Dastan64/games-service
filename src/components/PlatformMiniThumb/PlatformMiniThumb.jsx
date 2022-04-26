import React from 'react';
import styles from "./PlatformMiniThumb.module.css";

const PlatformMiniThumb = ({platformName}) => {
    return (
        <div className={styles.game__thumb}>
            <p className={styles.game__platform}>{platformName}</p>
        </div>
    );
};

export default PlatformMiniThumb;