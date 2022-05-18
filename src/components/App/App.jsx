import styles from './App.module.css';

import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

//Components
import GamesList from '../GamesList/GamesList';
import Game from '../Game/Game';
import SharedLayout from '../SharedLayout/SharedLayout';

const App = () => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games.games);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BASE_URL}games?dates=2021-01-01,2021-12-31&platforms=18,1,7&ordering=-added&key=${process.env.REACT_APP_API_KEY}`
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
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<GamesList games={games}/>}/>
                </Route>
                <Route path="/game/:slug" element={<Game/>}/>
                <Route path="/games" element={<GamesList games={games}/>}/>
            </Routes>
        </div>
    );
};

export default App;
