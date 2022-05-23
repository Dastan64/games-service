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
        route: '/genres/action',
        isSolid: true,
    },
    {
        name: 'Strategy',
        image_background: strategy,
        route: '/genres/strategy',
        isSolid: true,
    }, {
        name: 'RPG',
        image_background: rpg,
        route: '/genres/role-playing-games-rpg',
        isSolid: true,
    },
    {
        name: 'Shooter',
        image_background: shooter,
        route: '/genres/shooter',
        isSolid: true,
    },
    {
        name: 'Adventure',
        image_background: adventure,
        route: '/genres/adventure',
        isSolid: true,
    },
    {
        name: 'Puzzle',
        image_background: puzzle,
        route: '/genres/puzzle',
        isSolid: true,
    },
    {
        name: 'Racing',
        image_background: racing,
        route: '/genres/racing',
        isSolid: true,
    },
    {
        name: 'Sports',
        image_background: sports,
        route: '/genres/sports',
        isSolid: true,
    },
]