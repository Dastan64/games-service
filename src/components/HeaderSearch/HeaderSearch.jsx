import React, { useState } from 'react';
import styles from './HeaderSearch.module.css';

//Hooks
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { searchGames } from '../../store/actions/games';

const HeaderSearch = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue === '') {
            return;
        }
        dispatch(searchGames(inputValue))
        navigate('/games')
    }

    return (
        <form className={styles.headerForm} action="" role="search" onSubmit={handleSubmit}>
            <div className={styles.headerInputArea}>
                <input className={styles.headerInput} value={inputValue} type="text" name="header-search"
                       id="header-search"
                       placeholder="Search..." onChange={handleChange}/>
            </div>
        </form>
    );
};

export default HeaderSearch;