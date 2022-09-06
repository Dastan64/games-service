import React from 'react';
import NavList from '../NavList/NavList';

import styled from './NavSection.module.css';

const NavSection = ({ title, listItems, isMobile }) => {
    return (
        <>
            {listItems.length > 0 &&
                <div>
                    <h3 className={styled.navSectionTitle}>{title}</h3>
                    {<NavList items={listItems} isMobile={isMobile}/>}
                </div>
            }
        </>

    );
};

export default NavSection;
