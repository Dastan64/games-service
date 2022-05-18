import styles from './App.module.css';

import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

//Components
import GamesList from '../GamesList/GamesList';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Aside from '../Aside/Aside';

const App = () => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games.games);

    useEffect(() => {
        fetch(
            'https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&platforms=18,1,7&ordering=-added&key=3f440a1115914382a87c089c5251f2a7'
        )
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: 'LOAD_GAMES',
                    payload: data.results,
                });
            });
    }, [dispatch]);

    return (
        <div className={styles.app}>
            <Header/>
            <Routes>
                <Route path="/" element={<GamesList games={games}/>}/>
                <Route path="/game/:slug" element={<Game/>}/>
                <Route path="/games" element={<GamesList games={games}/>}/>
            </Routes>
            <Aside/>
        </div>
    );
};

export default App;
