import pc from '../assets/images/pc.svg';
import ps4 from '../assets/images/ps4.svg';
import ps5 from '../assets/images/ps5.svg';
import xbox from '../assets/images/xbox.svg';
import nintendo from '../assets/images/nintendo.svg';
import macos from '../assets/images/macos.svg';
import linux from '../assets/images/linux.svg';

export const platforms = [
    {
        name: 'PC',
        image_background: pc,
        route: '/games/pc',
    },
    {
        name: 'PlayStation 4',
        image_background: ps4,
        route: '/games/playstation4',
    }, {
        name: 'PlayStation 5',
        image_background: ps5,
        route: '/games/playstation5',
    },
    {
        name: 'Xbox Series S',
        image_background: xbox,
        route: '/games/xbox-series-x',
    },
    {
        name: 'Xbox Series X',
        image_background: xbox,
        route: '/games/xbox-series-x',
    },
    {
        name: 'Nintendo Switch',
        image_background: nintendo,
        route: '/games/nintendo-switch',
    },
    {
        name: 'MacOS',
        image_background: macos,
        route: '/games/macos',
    },
    {
        name: 'Linux',
        image_background: linux,
        route: '/games/linux',
    },
]