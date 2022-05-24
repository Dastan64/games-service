import React, { useEffect, useRef, useState } from 'react';
import styled from './HeaderSearch.module.css';

//Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { searchGames } from '../../store/actions/games';
import { formatNumber } from '../../utils/formatNumber';

const HeaderSearch = () => {
    const [inputValue, setInputValue] = useState('');
    const gamesTotalCount = useSelector(state => state.games.gamesTotalCount);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    // const gamesCount = useSelector(state => state.games.gamesCount)

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

    function handleKeyPress(e) {
        if (e.altKey && e.key === 'Enter') {
            inputRef.current.focus();
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', handleKeyPress)

        return () => {
            document.removeEventListener('keyup', handleKeyPress)
        }
    }, [])

    return (
        <form className={styled.headerForm} action="" role="search" onSubmit={handleSubmit}>
            <div className={styled.headerInputArea}>
                <input className={styled.headerInput} value={inputValue} type="text" name="header-search"
                       id="header-search"
                       placeholder={gamesTotalCount > 0 ? `Search ${formatNumber(gamesTotalCount)} games` : 'Search...'}
                       onChange={handleChange} ref={inputRef}/>
                <div className={styled.headerInputShortcut}>
                    <span className={styled.shortcutKey}>alt</span><span>+</span><span
                    className={styled.shortcutKey}>enter</span>
                </div>
            </div>
        </form>
    );
};

export default HeaderSearch;