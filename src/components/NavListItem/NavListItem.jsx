import React from 'react';
import styles from './NavListItem.module.css';
import {Link} from 'react-router-dom';

const NavListItem = ({listItem}) => {
    return (
        <li className={styles.navListItem}>
            <Link to={`${listItem.route}`}>
                <div className={styles.navListItemIconContainer}>
                    <span className={styles.navListItemIcon} dangerouslySetInnerHTML={{__html: listItem.img}}></span>
                    {/*<img className={styles.navListItemIcon} src={listItem.img} alt=""/>*/}
                </div>
                <span className={styles.navListItemText}>{listItem.text}</span>
            </Link>
        </li>
    );
};

export default NavListItem;