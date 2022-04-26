import React from 'react';
import styles from "./Header.module.css"
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={styles.headerWrapper}>
                <Link to={"./"}>
                    <div className="header__logo-container">
                        <span className={styles.logoCaption}>RAWG</span>
                    </div>
                </Link>
                <HeaderSearch/>
            </div>
        </header>
    );
};

export default Header;