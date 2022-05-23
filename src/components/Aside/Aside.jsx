import React from 'react';
import styled from './Aside.module.css';
import NavSection from '../NavSection/NavSection';
import { mockData } from '../../static';
import { useSelector } from 'react-redux';

const Aside = () => {
    const followingPlatforms = useSelector(state => state.platforms.followedPlatforms);
    return (
        <aside className={styled.aside}>
            <NavSection title="Following" listItems={followingPlatforms}/>
            <NavSection title="You" listItems={mockData.personal}/>
            <NavSection title="Browse" listItems={mockData.browse}/>
            <NavSection title="Platforms" listItems={mockData.platforms}/>
            <NavSection title="Genres" listItems={mockData.genres}/>
        </aside>
    );
};

export default Aside;