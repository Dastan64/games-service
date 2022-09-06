import React from 'react';
import styled from './Header.module.css'
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import { Link } from 'react-router-dom';
import BurgerBtn from '../BurgerBtn/BurgerBtn';

const Header = ({ isMobileMenuActive, setIsMobileMenuActive }) => {
    return (
        <header>
            <div className={styled.headerWrapper}>
                <Link to={'/'}>
                    <div className="header__logo-container">
                        <span className={styled.logoCaption}>RAWG</span>
                    </div>
                </Link>
                <HeaderSearch/>
                <BurgerBtn active={isMobileMenuActive} setIsMobileMenuActive={setIsMobileMenuActive}/>
            </div>
        </header>
    );
};

export default Header;
