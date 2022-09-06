import React from 'react';
import styled from './BurgerBtn.module.css';

const BurgerBtn = ({ active, setIsMobileMenuActive }) => {
    const handleClick = () => setIsMobileMenuActive(!active);

    return (
        <button className={`${styled.burgerBtn} ${active ? styled.burgerBtnActive : ''}`} onClick={handleClick}>
            <span className={styled.burgerBtnLine}></span>
        </button>
    );
};

export default BurgerBtn;
