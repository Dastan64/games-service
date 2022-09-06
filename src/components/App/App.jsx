//Styles
import styled from './App.module.css';

//Hooks and core
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
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
import Game from '../Game/Game';
import SharedLayout from '../SharedLayout/SharedLayout';
import SearchPage from '../../pages/SearchPage/SearchPage';

//Pages
import LikedGames from '../../pages/LikedGames/LikedGames';
import Home from '../../pages/Home/Home';
import WishedGames from '../../pages/WishedGames/WishedGames';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';
import CategoryPage from '../../pages/CategoryPage/CategoryPage';

const App = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGamesCount())
        dispatch(getGames(1))
        dispatch(getPlatforms(1))
        dispatch(getStores(1))
        dispatch(getGenres(1))
        dispatch(getTags(1))
        dispatch(getDevelopers(1))
        dispatch(getPublishers(1))
        dispatch(getCreators(1))
    }, [dispatch]);

    return (
        <div className={styled.app}>
            <Routes>
                <Route path="/" element={<SharedLayout isMobileMenuActive={isMobileMenuActive}
                                                       setIsMobileMenuActive={setIsMobileMenuActive}/>}>
                    <Route index element={<Home isMobileMenuActive={isMobileMenuActive}
                                                setIsMobileMenuActive={setIsMobileMenuActive}/>}/>
                    <Route path="games" element={<Home/>}/>
                    <Route path="games/liked" element={<LikedGames/>}/>
                    <Route path="search" element={<SearchPage/>}/>
                    <Route path="games/wishlist" element={<WishedGames/>}/>
                    <Route path="game/:slug" element={<Game/>}/>
                    <Route path="platforms" element={<CategoryPage category={'platforms'} title={'platforms'}
                                                                   callback={getPlatforms}/>}/>
                    <Route path="platforms/:slug" element={<DetailsPage source={'platforms'}/>}/>
                    <Route path="stores"
                           element={<CategoryPage category={'stores'} title={'stores'} callback={getStores}/>}/>
                    <Route path="stores/:slug" element={<DetailsPage source={'stores'}/>}/>
                    <Route path="genres"
                           element={<CategoryPage category={'genres'} title={'genres'} callback={getGenres}/>}/>
                    <Route path="genres/:slug" element={<DetailsPage source={'genres'}/>}/>
                    <Route path="tags" element={<CategoryPage category={'tags'} title={'tags'} callback={getTags}/>}/>
                    <Route path="tags/:slug" element={<DetailsPage source={'tags'}/>}/>
                    <Route path="developers" element={<CategoryPage category={'developers'} title={'developers'}
                                                                    callback={getDevelopers}/>}/>
                    <Route path="developers/:slug" element={<DetailsPage source={'developers'}/>}/>
                    <Route path="publishers" element={<CategoryPage category={'publishers'} title={'publishers'}
                                                                    callback={getPublishers}/>}/>
                    <Route path="publishers/:slug" element={<DetailsPage source={'publishers'}/>}/>
                    <Route path="creators"
                           element={<CategoryPage category={'creators'} title={'creators'} callback={getCreators}/>}/>
                    <Route path="creators/:slug" element={<DetailsPage source={'creators'}/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
