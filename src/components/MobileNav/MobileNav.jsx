// Hooks and core
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from './MobileNav.module.css';
import { Link } from 'react-router-dom';

import NavSection from '../NavSection/NavSection';
import { mockData } from '../../static';

const MobileNav = ({ active, setIsMobileMenuActive }) => {

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        }

        return () => document.body.style.overflow = '';
    }, [active]);

    const handleClick = () => setIsMobileMenuActive(!active);
    const following = useSelector(state => state.following.following);

    return (
        <nav className={`${styled.mobileNav} ${active ? styled.mobileNavActive : ''}`}>
            <div>
                <Link to={'/'}><h3 className={styled.mobileNavSectionTitle}>Home</h3></Link>
            </div>
            <NavSection title="Following" listItems={following} isMobile/>
            <NavSection title="You" listItems={mockData.personal} isMobile/>
            <NavSection title="Browse" listItems={mockData.browse} isMobile/>
            <NavSection title="Platforms" listItems={mockData.platforms} isMobile/>
            <NavSection title="Genres" listItems={mockData.genres} isMobile/>
            <button className={styled.mobileNavCloseBtn} type="button" onClick={handleClick}><span>&times;</span>
            </button>
        </nav>
    );
};

export default MobileNav;
