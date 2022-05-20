import React from 'react';
import NavList from '../NavList/NavList';

import styled from './NavSection.module.css';

const NavSection = ({title, listItems}) => {
    return (
        <>
            {listItems.length > 0 &&
                <div>
                    <h3 className={styled.navSectionTitle}>{title}</h3>
                    {<NavList items={listItems}/>}
                </div>
            }
        </>

    );
};

export default NavSection;