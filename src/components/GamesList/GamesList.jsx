import styles from './GamesList.module.css';
import React, { useState } from 'react';

//Components
import GameCard from '../GameCard/GameCard';
import Loader from '../Loader/Loader';
import InfiniteScroller from '../InfiniteScroller/InfiniteScroller';

//Images
import grid from '../../assets/images/grid.svg';
import column from '../../assets/images/column.svg';

const GamesList = ({ games, hasMore }) => {
    const [isGridViewActive, setIsGridViewActive] = useState(true);
    const changeView = () => setIsGridViewActive(!isGridViewActive);

    return (
        <>
            {games.length > 0 ? (
                <>
                    <div className={styles.displayOptions}>
                        <p>Display options:</p>
                        <div className={styles.gamesDisplayButtons}>
                            <button
                                className={styles.gamesDisplayButton}
                                title="Grid view"
                                onClick={changeView}>
                                <img src={grid} alt=""/>
                            </button>
                            <button
                                className={styles.gamesDisplayButton}
                                title="Column view"
                                onClick={changeView}>
                                <img src={column} alt=""/>
                            </button>
                        </div>
                    </div>
                    <InfiniteScroller data={games} hasMore={hasMore}>
                        <div className={isGridViewActive ? styles.games : styles.gamesColumn}>
                            {games.map((game) => (
                                <GameCard game={game} key={game.id}/>
                            ))}
                        </div>
                    </InfiniteScroller>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
};

export default GamesList;
