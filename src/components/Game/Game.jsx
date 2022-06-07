//Hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

//Styles
import styled from './Game.module.css';
import reusablestyles from '../../reusable/reusable.module.css';
import clsx from 'clsx';

//Utils
import { formatDate } from '../../utils/formatDate';

//Actions
import {
    getAchievements,
    getGameDevelopers,
    getDLCs,
    getGamesFromSameSeries,
    getScreenshots, getGameDetails,
} from '../../store/actions/game';

//Components
import DlcList from '../DlcList/DlcList';
import Screenshots from '../Screenshots/Screenshots';
import DevelopersList from '../DevelopersList/DevelopersList';
import AchievementsList from '../AchievementsList/AchievementsList';

const Game = () => {
    const {slug} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGameDetails(slug))
        dispatch(getGamesFromSameSeries(slug));
        dispatch(getAchievements(slug));
        dispatch(getDLCs(slug));
        dispatch(getScreenshots(slug));
        dispatch(getGameDevelopers(slug));
    }, [slug, dispatch]);

    let platformsList, genresList, developersList, publishersList, tagsList, systemRequirements;
    const game = useSelector(state => state.game.game);

    const {
        playtime,
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
        website,
    } = game ?? {};

    if (platforms?.length > 0) {
        platformsList = platforms.map((platform) => platform.platform.name).join(', ');
        systemRequirements = platforms.filter(platform => Object.keys(platform.requirements).length > 0).map((platform) => {
            return (
                <div key={platform.platform.id}>
                    <h2 className={styled.gameRequirementsHeading}>
                        System requirements for {platform.platform.name}
                    </h2>
                    {platform.requirements && (
                        <>
                            <p className={styled.gameRequirementsText}>
                                {platform.requirements.minimum}
                            </p>
                            <p className={styled.gameRequirementsText}>
                                {platform.requirements.recommended}
                            </p>
                        </>
                    )}
                </div>
            );
        });
    }

    if (genres?.length > 0) {
        genresList = genres.map((genre) => genre.name).join(', ');
    }
    if (developers?.length > 0) {
        developersList = developers.map((developer) => developer.name).join(', ');
    }
    if (publishers?.length > 0) {
        publishersList = publishers.map((publisher) => publisher.name).join(', ');
    }
    if (tags?.length > 0) {
        tagsList = tags.map((tag, index) => (
            <li className={reusablestyles.listItem} key={tag.id}>
                {(index ? ', ' : '') + tag.name}
            </li>
        ));
    }

    //Conditional classes
    const ratingNumberStyle = clsx({
        [reusablestyles.lowRating]: metacritic < 50,
        [reusablestyles.midRating]: metacritic >= 50 && metacritic <= 74,
        [reusablestyles.highRating]: metacritic >= 75 && metacritic <= 100,
    });

    //Retrieving state
    const achievements = useSelector((state) => state.game.gameAchievements);
    const gamesFromSameSeries = useSelector(
        (state) => state.game.gamesFromSameSeries
    );
    const dlcs = useSelector((state) => state.game.dlcs);
    const screenshots = useSelector((state) => state.game.screenshots);
    const personDevelopers = useSelector((state) => state.game.developers);

    return (
        <section className={styled.gameSection}>
            <ul className={styled.gameBreadcrumbs}>
                <li className={styled.gameBreadcrumbsItem}><Link className={styled.gameBreadcrumbItemLink}
                                                                 to={'/'}>Home</Link></li>
                <li className={styled.gameBreadcrumbsItem}><Link className={styled.gameBreadcrumbItemLink}
                                                                 to={'/games'}>Games</Link></li>
                <li className={styled.gameBreadcrumbsItem}>{name}</li>
            </ul>
            <div className={styled.gameTopContainer}>
                <div className={styled.gameReleaseDate}>
                    <p>{formatDate(released)}</p>
                </div>
                <div className={styled.gamePlaytime}>
                    <p>AVERAGE PLAYTIME: {playtime} hours</p>
                </div>
            </div>
            <h1 className={styled.gameTitle}>{name}</h1>
            <section className="about">
                <h2>About</h2>
                <div
                    className={styled.gameDescriptionContainer}
                    dangerouslySetInnerHTML={{__html: description}}
                ></div>
            </section>
            <section className="info">
                <div className={styled.infoGrid}>
                    <div className="info__grid-item">
                        <h4 className={styled.infoCaption}>Platforms</h4>
                        <p className={styled.infoText}>{platformsList}</p>
                    </div>
                    {metacritic && (
                        <div className="info__grid-item">
                            <h4 className={styled.infoCaption}>Metascore</h4>
                            <p className={`${styled.infoRating} ${ratingNumberStyle}`}>
                                {metacritic}
                            </p>
                        </div>
                    )}
                    <div className="info__grid-item">
                        <h4 className={styled.infoCaption}>Genre</h4>
                        <p className={styled.infoText}>{genresList}</p>
                    </div>
                    <div className="info__grid-item">
                        <h4 className={styled.infoCaption}>Release Date</h4>
                        <p className={styled.infoText}>{formatDate(released)}</p>
                    </div>
                    <div className="info__grid-item">
                        <h4 className={styled.infoCaption}>Developer</h4>
                        <p className={styled.infoText}>{developersList}</p>
                    </div>
                    <div className="info__grid-item">
                        <h4 className={styled.infoCaption}>Publisher</h4>
                        <p className={styled.infoText}>{publishersList}</p>
                    </div>
                    <div className="info__grid-item">
                        <h4 className={styled.infoCaption}>Age rating</h4>
                        <p className={styled.infoText}>The Coalition</p>
                    </div>
                </div>
            </section>
            <div
                className={styled.gameBackgroundImageContainer}
                style={{
                    backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${background_image})`,
                    backgroundSize: 'cover',
                }}
            ></div>
            {gamesFromSameSeries.length > 0 && (
                <section>
                    <h2>Other games in the series:</h2>
                    <ul className={reusablestyles.listMarkered}>
                        {gamesFromSameSeries.map((game) => (
                            <li key={game.id}>
                                <Link to={`/game/${game.slug}`} className={reusablestyles.link}>
                                    {game.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            {dlcs.length > 0 && (
                <>
                    <section>
                        <h2>DLC's and editions:</h2>
                        <DlcList dlcs={dlcs}/>
                    </section>
                </>
            )}
            <section>
                <h2>Tags:</h2>
                <ul className={reusablestyles.list}>{tagsList}</ul>
            </section>
            {achievements.length > 0 && (
                <section className={styled.gameAchievements}>
                    <div className={styled.gameAchievementsTop}>
                        <h2>{name} achievements:</h2>
                        <p>{achievements_count} achievements</p>
                    </div>
                    <AchievementsList achievements={achievements}/>
                </section>
            )}
            <section>
                <h2>Website:</h2>
                <a className={styled.gameWebsiteLink} href={website}>
                    {website}
                </a>
            </section>
            <section>{systemRequirements}</section>
            {personDevelopers.length > 0 && (
                <section>
                    <h2>{name} created by:</h2>
                    <DevelopersList developers={personDevelopers}/>
                </section>
            )}
            {screenshots.length > 0 && <section className={styled.rightSection}>
                <h2>{name} screenshots:</h2>
                <Screenshots screenshots={screenshots}/>
            </section>}
        </section>
    );
};

export default Game;
