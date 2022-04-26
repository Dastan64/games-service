import React from 'react';
import GameCard from "../GameCard/GameCard";
import styles from "./GamesList.module.css"
import Loader from "../Loader/Loader";


const GamesList = ({games}) => {
    return (
        <>
            {games.length > 0 ?
                <div className={styles.games}>
                    {games.map((game) => <GameCard game={game} key={game.id}/>)}
                </div> : <Loader/>}
        </>
    );
};

export default GamesList;