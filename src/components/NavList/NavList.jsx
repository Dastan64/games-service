import React from 'react';
import {v4 as uuidv4} from 'uuid';
import NavListItem from '../NavListItem/NavListItem';
import styles from './NavList.module.css';

const NavList = ({navObj}) => {
    return (
        <>
            <h3 className={styles.navListTitle}>{navObj.title}</h3>
            <ul className={styles.navList}>
                {navObj.listItems.map(listItem => <NavListItem listItem={listItem} key={uuidv4()}/>)}
            </ul>
        </>
    );
};

export default NavList;