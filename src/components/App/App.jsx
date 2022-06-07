//Styles
import styled from './App.module.css';

//Hooks and core
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//Actions
import { getGames, getGamesCount } from '../../store/actions/games';
import { getGenres } from '../../store/actions/genres';
import { getPlatforms } from '../../store/actions/platforms';
import { getStores } from '../../store/actions/stores';
import { getTags } from '../../store/actions/tags';

//Components
import GamesList from '../GamesList/GamesList';
import Game from '../Game/Game';
import SharedLayout from '../SharedLayout/SharedLayout';

//Pages
import LikedGames from '../../pages/LikedGames/LikedGames';
import Platforms from '../../pages/Platforms/Platforms';
import PlatformDetail from '../../pages/PlatformDetail/PlatformDetail';
import GenreDetail from '../../pages/GenreDetail/GenreDetail';
import Stores from '../../pages/Stores/Stores';
import Home from '../../pages/Home/Home';
import WishedGames from '../../pages/WishedGames/WishedGames';
import Genres from '../../pages/Genres/Genres';
import Tags from '../../pages/Tags/Tags';
import Developers from '../../pages/Developers/Developers';
import { getDevelopers } from '../../store/actions/developers';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGamesCount())
        dispatch(getGames())
        dispatch(getPlatforms())
        dispatch(getStores())
        dispatch(getGenres())
        dispatch(getTags())
        dispatch(getDevelopers())
    }, [dispatch]);

    const games = useSelector((state) => state.games.games);

    return (
        <div className={styled.app}>
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<Home games={games}/>}/>
                    <Route path="games" element={<GamesList games={games}/>}/>
                    <Route path="games/liked" element={<LikedGames/>}/>
                    <Route path="games/wishlist" element={<WishedGames/>}/>
                    <Route path="games/:platformSlug" element={<PlatformDetail/>}/>
                    <Route path="game/:slug" element={<Game/>}/>
                    <Route path="genres/:genreSlug" element={<GenreDetail/>}/>
                    <Route path="platforms" element={<Platforms/>}/>
                    <Route path="stores" element={<Stores/>}/>
                    <Route path="genres" element={<Genres/>}/>
                    <Route path="tags" element={<Tags/>}/>
                    <Route path="developers" element={<Developers/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
