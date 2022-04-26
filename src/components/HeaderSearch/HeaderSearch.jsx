import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from "./HeaderSearch.module.css";
import {useDispatch} from "react-redux";

const HeaderSearch = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue === "") {
            return;
        }
        fetch(`https://api.rawg.io/api/games?search=${inputValue}&key=3f440a1115914382a87c089c5251f2a7`).then(response => response.json()).then(data => {
            console.log(data)
            dispatch({
                type: "SEARCH_GAMES",
                payload: data.results,
            })
        })

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