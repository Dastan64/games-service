import action from '../assets/images/action.png';
import strategy from '../assets/images/strategy.png';
import rpg from '../assets/images/rpg.png';
import shooter from '../assets/images/shooter.png';
import adventure from '../assets/images/adventure.png';
import puzzle from '../assets/images/puzzle.png';
import racing from '../assets/images/racing.png';
import sports from '../assets/images/sports.png';

export const genres = [
    {
        name: 'Action',
        image_background: action,
        route: '/games/action',
        isSolid: true,
    },
    {
        name: 'Strategy',
        image_background: strategy,
        route: '/games/strategy',
        isSolid: true,
    }, {
        name: 'RPG',
        image_background: rpg,
        route: '/games/rpg',
        isSolid: true,
    },
    {
        name: 'Shooter',
        image_background: shooter,
        route: '/games/shooter',
        isSolid: true,
    },
    {
        name: 'Adventure',
        image_background: adventure,
        route: '/games/adventure',
        isSolid: true,
    },
    {
        name: 'Puzzle',
        image_background: puzzle,
        route: '/games/puzzle',
        isSolid: true,
    },
    {
        name: 'Racing',
        image_background: racing,
        route: '/games/racing',
        isSolid: true,
    },
    {
        name: 'Sports',
        image_background: sports,
        route: '/games/sports',
        isSolid: true,
    },
]