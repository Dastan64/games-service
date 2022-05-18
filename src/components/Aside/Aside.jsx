import React from 'react';
import {navigation} from '../../navigation';
import styled from './Aside.module.css';
import NavList from '../NavList/NavList';

import {v4 as uuidv4} from 'uuid';


const Aside = () => {
    return (
        <aside className={styled.aside}>
            {navigation.map(nav => {
                return <NavList navObj={nav} key={uuidv4()}/>
            })}
        </aside>
    );
};

export default Aside;