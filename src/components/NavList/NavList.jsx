import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavListItem from '../NavListItem/NavListItem';
import styled from './NavList.module.css';

const NavList = ({ items, isMobile }) => {
    return (
        <>
            <ul className={`${styled.navList} ${isMobile ? styled.navListMobile : ''}`}>
                {items.map(listItem => <NavListItem listItem={listItem} key={uuidv4()}/>)}
            </ul>
        </>
    );
};

export default NavList;
