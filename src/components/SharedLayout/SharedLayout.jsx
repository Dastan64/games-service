import React from 'react';
import { Outlet } from 'react-router-dom';

import styled from './SharedLayout.module.css';

import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';

const SharedLayout = ({ isMobileMenuActive, setIsMobileMenuActive }) => {
    return (
        <>
            <Header isMobileMenuActive={isMobileMenuActive} setIsMobileMenuActive={setIsMobileMenuActive}/>
            <div className={styled.container}>
                <Aside/>
                <Main>
                    <Outlet/>
                </Main>
            </div>
        </>
    );
};

export default SharedLayout;
