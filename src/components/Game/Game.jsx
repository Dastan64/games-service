import React, {useEffect, useState} from 'react';
import styles from "./Game.module.css";
import {Link, useParams} from "react-router-dom";
import {formatDate} from "../../utils/formatDate";
import AchievementsList from "../AchievementsList/AchievementsList";
import {getAchievements, getGamesFromSameSeries} from "../../store/actions/card";
import {useDispatch, useSelector} from "react-redux";

const Game = () => {
    const [game, setGame] = useState();
    const {slug} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAchievements(slug))
        dispatch(getGamesFromSameSeries(slug))
        fetch(`https://api.rawg.io/api/games/${slug}?key=3f440a1115914382a87c089c5251f2a7`).then(response => response.json()).then(data => {
            console.log(data)
            setGame(data)
        })
    }, [slug, dispatch])

    let released, name, description, background_image, platforms, platformsList, genres, genresList, metacritic,
        developers, developersList, publishers, publishersList, tags, tagsList, achievements_count, website,
        systemRequirements;

    if (game) {
        ({
            released,
            name,
            description,
            background_image,
            platforms,
            genres,
            metacritic,
            developers,
            publishers,
            tags,
            achievements_count,
            website
        } = game);
        if (platforms.length > 0) {
            platformsList = platforms.map(platform => platform.platform.name).join(", ");
            systemRequirements = platforms.map(platform => {
                return (
                    <div key={platform.platform.id}>
                        <h2 className={styles.gameRequirementsHeading}>System requirements
                            for {platform.platform.name}</h2>
                        {platform.requirements &&
                            <>
                                <p className={styles.gameRequirementsText}>{platform.requirements.minimum}</p>
                                <p className={styles.gameRequirementsText}>{platform.requirements.recommended}</p>
                            </>
                        }
                    </div>
                )
            })
        }

        if (genres.length > 0) {
            genresList = genres.map(genre => genre.name).join(", ");
        }
        if (developers.length > 0) {
            developersList = developers.map(developer => developer.name).join(", ");
        }
        if (publishers.length > 0) {
            publishersList = publishers.map(publisher => publisher.name).join(", ");
        }
        if (tags.length > 0) {
            tagsList = tags.map((tag, index) => <li className={styles.listItem}
                                                    key={tag.id}>{(index ? ", " : "") + tag.name}</li>);
        }
    }

    const achievements = useSelector(state => state.game.gameAchievements)
    const gamesFromSameSeries = useSelector(state => state.game.gamesFromSameSeries)
    return (
        <section className={styles.gameSection}>
            <div className={styles.gameTopContainer}>
                <div className={styles.gameReleaseDate}>
                    <p>{formatDate(released)}</p>
                </div>
                <div className={styles.gamePlaytime}>
                    <p>AVERAGE PLAYTIME: 11 HOURS</p>
                </div>
            </div>
            <h1 className={styles.gameTitle}>{name}</h1>
            <section className="about">
                <h2>About</h2>
                <div className={styles.gameDescriptionContainer} dangerouslySetInnerHTML={{__html: description}}></div>
            </section>
            <section className="info">
                <div className={styles.infoGrid}>
                    <div className="info__grid-item">
                        <h4 className={styles.infoCaption}>Platforms</h4>
                        <p className={styles.infoText}>{platformsList}</p>
                    </div>
                    <div className="info__grid-item">
                        <h4 className={styles.infoCaption}>Metascore</h4>
                        <p className={styles.infoText}>{metacritic}</p>
                    </div>
                    <div className="info__grid-item">
                        <h4 className={styles.infoCaption}>Genre</h4>
                        <p className={styles.infoText}>{genresList}</p>
                    </div>
                    <div className="info__grid-item">
                        <h4 className={styles.infoCaption}>Release Date</h4>
                        <p className={styles.infoText}>{formatDate(released)}</p>
                    </div>
                    <div className="info__grid-item">
                        <h4 className={styles.infoCaption}>Developer</h4>
                        <p className={styles.infoText}>{developersList}</p>
                    </div>
                    <div className="info__grid-item">
                        <h4 className={styles.infoCaption}>Publisher</h4>
                        <p className={styles.infoText}>{publishersList}</p>
                    </div>
                    <div className="info__grid-item">
                        <h4 className={styles.infoCaption}>Age rating</h4>
                        <p className={styles.infoText}>The Coalition</p>
                    </div>
                </div>
            </section>
            <div className={styles.gameBackgroundImageContainer}
                 style={{
                     backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${background_image})`,
                     backgroundSize: 'cover'
                 }}>
            </div>
            {gamesFromSameSeries.length > 0 && <section>
                <h2>Other games in the series:</h2>
                <ul className={styles.listMarkered}>{gamesFromSameSeries.map((game, index) => <li key={game.id}>
                    <Link to={`/game/${game.slug}`}
                          className={styles.link}
                    >{game.name}</Link>
                </li>)}</ul>
            </section>}
            {/*<section>*/}
            {/*    <h2>DLCs and editions:</h2>*/}
            {/*    <ul className={styles.listMarkered}>{gamesFromSameSeries.map((game, index) => <li>*/}
            {/*        <Link to={`/game/${game.slug}`}*/}
            {/*              className={styles.link}*/}
            {/*              key={game.id}>{game.name}</Link>*/}
            {/*    </li>)}</ul>*/}
            {/*</section>*/}
            <section>
                <h2>Tags:</h2>
                <ul className={styles.list}>
                    {tagsList}
                </ul>
            </section>
            {achievements.length > 0 && <section className={styles.gameAchievements}>
                <div className={styles.gameAchievementsTop}>
                    <h2>{name} achievements:</h2>
                    <p>{achievements_count} achievements</p>
                </div>
                <AchievementsList achievements={achievements}/>
            </section>}
            <section>
                <h2>Website:</h2>
                <a className={styles.gameWebsiteLink} href={website}>{website}</a>
            </section>
            <section>
                {systemRequirements}
            </section>
        </section>
    );
};

export default Game;