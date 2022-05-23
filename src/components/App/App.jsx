import styles from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getGames } from '../../store/actions/games';
import { getGenres } from '../../store/actions/genres';

//Components
import GamesList from '../GamesList/GamesList';
import Game from '../Game/Game';
import SharedLayout from '../SharedLayout/SharedLayout';
import LikedGames from '../../pages/LikedGames/LikedGames';
import Platforms from '../../pages/Platforms/Platforms';
import PlatformDetail from '../../pages/PlatformDetail/PlatformDetail';
import GenreDetail from '../../pages/GenreDetail/GenreDetail';
import { getPlatforms } from '../../store/actions/platforms';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames())
        dispatch(getPlatforms())
        dispatch(getGenres())
    }, [dispatch]);

    const games = useSelector((state) => state.games.games);

    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<GamesList games={games}/>}/>
                    <Route path="games" element={<GamesList games={games}/>}/>
                    <Route path="games/:platformSlug" element={<PlatformDetail/>}/>
                    <Route path="genres/:genreSlug" element={<GenreDetail/>}/>
                    <Route path="games/liked" element={<LikedGames/>}/>
                    <Route path="platforms" element={<Platforms/>}/>
                </Route>
                <Route path="/game/:slug" element={<Game/>}/>
            </Routes>
        </div>
    );
};

export default App;
