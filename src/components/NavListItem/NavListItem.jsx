import React from 'react';
import {Link} from 'react-router-dom';
import styled from './NavListItem.module.css';

const NavListItem = ({listItem}) => {
    return (
        <li className={styled.navListItem}>
            <Link to={listItem.route}>
                {listItem.isSolid ?
                    <img className={`${styled.navListItemIcon} ${styled.navListItemIconSolid}`}
                         src={listItem.image_background} alt=""/>
                    :
                    <div className={styled.navListItemIconContainer}>
                        <img className={styled.navListItemIcon} src={listItem.image_background} alt=""/>
                    </div>
                }
                <span className={styled.navListItemText}>{listItem.name}</span>
            </Link>
        </li>

    );
};

export default NavListItem;