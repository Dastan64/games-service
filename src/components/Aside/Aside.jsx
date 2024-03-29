import React from 'react';
import { useSelector } from 'react-redux';
import styled from './Aside.module.css';
import NavSection from '../NavSection/NavSection';
import { mockData } from '../../static';
import { Link } from 'react-router-dom';

const Aside = () => {
    const following = useSelector(state => state.following.following);
    return (
        <aside className={styled.aside}>
            <nav>
                <div>
                    <Link to={'/'}><h3 className={styled.navSectionTitle}>Home</h3></Link>
                </div>
                <NavSection title="Following" listItems={following}/>
                <NavSection title="You" listItems={mockData.personal}/>
                <NavSection title="Browse" listItems={mockData.browse}/>
                <NavSection title="Platforms" listItems={mockData.platforms}/>
                <NavSection title="Genres" listItems={mockData.genres}/>
            </nav>
        </aside>
    );
};

export default Aside;
