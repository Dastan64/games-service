import React from 'react';
import {v4 as uuidv4} from 'uuid';
import NavListItem from '../NavListItem/NavListItem';
import styles from './NavList.module.css';

const NavList = ({items}) => {
    return (
        <>
            <ul className={styles.navList}>
                {items.map(listItem => <NavListItem listItem={listItem} key={uuidv4()}/>)}
            </ul>
        </>
    );
};

export default NavList;