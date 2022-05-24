import React from 'react';
import { useSelector } from 'react-redux';
import styled from './Aside.module.css';
import NavSection from '../NavSection/NavSection';
import { mockData } from '../../static';
import { Link } from 'react-router-dom';

const Aside = () => {
    const followingPlatforms = useSelector(state => state.platforms.followedPlatforms);
    return (
        <aside className={styled.aside}>
            <div>
                <Link to={'/'}><h3 className={styled.navSectionTitle}>Home</h3></Link>
            </div>
            <NavSection title="Following" listItems={followingPlatforms}/>
            <NavSection title="You" listItems={mockData.personal}/>
            <NavSection title="Browse" listItems={mockData.browse}/>
            <NavSection title="Platforms" listItems={mockData.platforms}/>
            <NavSection title="Genres" listItems={mockData.genres}/>
        </aside>
    );
};

export default Aside;