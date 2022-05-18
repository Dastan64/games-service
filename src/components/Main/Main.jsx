import React from 'react';
import styled from './Main.module.css';

const Main = ({children}) => {
    return (
        <main className={styled.main}>
            {children}
        </main>
    );
};

export default Main;