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
import { getDevelopers } from '../../store/actions/developers';
import { getPublishers } from '../../store/actions/publishers';
import { getCreators } from '../../store/actions/creators';

//Components
import GamesList from '../GamesList/GamesList';
import Game from '../Game/Game';
import SharedLayout from '../SharedLayout/SharedLayout';

//Pages
import LikedGames from '../../pages/LikedGames/LikedGames';
import Platforms from '../../pages/Platforms/Platforms';
import Stores from '../../pages/Stores/Stores';
import Home from '../../pages/Home/Home';
import WishedGames from '../../pages/WishedGames/WishedGames';
import Genres from '../../pages/Genres/Genres';
import Tags from '../../pages/Tags/Tags';
import Developers from '../../pages/Developers/Developers';
import Publishers from '../../pages/Publishers/Publishers';
import Creators from '../../pages/Creators/Creators';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGamesCount())
        dispatch(getGames())
        dispatch(getPlatforms(1))
        dispatch(getStores(1))
        dispatch(getGenres(1))
        dispatch(getTags(1))
        dispatch(getDevelopers(1))
        dispatch(getPublishers(1))
        dispatch(getCreators(1))
    }, [dispatch]);

    const games = useSelector((state) => state.games.games);

    return (
        <div className={styled.app}>
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<Home games={games}/>}/>
                    <Route path="games" element={<GamesList games={games}/>}/>
                    <Route path="games/:slug" element={<DetailsPage source={'platforms'}/>}/>
                    <Route path="games/liked" element={<LikedGames/>}/>
                    <Route path="games/wishlist" element={<WishedGames/>}/>
                    <Route path="game/:slug" element={<Game/>}/>
                    <Route path="platforms" element={<Platforms/>}/>
                    <Route path="platforms/:slug" element={<DetailsPage source={'platforms'}/>}/>
                    <Route path="stores" element={<Stores/>}/>
                    <Route path="stores/:slug" element={<DetailsPage source={'stores'}/>}/>
                    <Route path="genres" element={<Genres/>}/>
                    <Route path="genres/:slug" element={<DetailsPage source={'genres'}/>}/>
                    <Route path="tags" element={<Tags/>}/>
                    <Route path="tags/:slug" element={<DetailsPage source={'tags'}/>}/>
                    <Route path="developers" element={<Developers/>}/>
                    <Route path="developers/:slug" element={<DetailsPage source={'developers'}/>}/>
                    <Route path="publishers" element={<Publishers/>}/>
                    <Route path="publishers/:slug" element={<DetailsPage source={'publishers'}/>}/>
                    <Route path="creators" element={<Creators/>}/>
                    <Route path="creators/:slug" element={<DetailsPage source={'creators'}/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
