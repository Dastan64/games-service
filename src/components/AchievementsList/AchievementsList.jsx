import React from 'react';
import styles from "./AchievementsList.module.css";
import Achievement from "../Achievement/Achievement";

const AchievementsList = ({achievements}) => {
    return (
        <ul className={styles.achievementsList}>
            {achievements.length > 0 && achievements.map(achievement => <Achievement key={achievement.id}
                                                                                     achievement={achievement}/>)}
        </ul>
    );
};

export default AchievementsList;