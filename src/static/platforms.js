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
        slug: 'pc',
        image_background: pc,
        route: '/platforms/pc',
    },
    {
        name: 'PlayStation 4',
        slug: 'playstation4',
        image_background: ps4,
        route: '/platforms/playstation4',
    }, {
        name: 'PlayStation 5',
        slug: 'playstation5',
        image_background: ps5,
        route: '/platforms/playstation5',
    },
    {
        name: 'Xbox Series S',
        slug: 'xbox-series-s',
        image_background: xbox,
        route: '/platforms/xbox-series-x',
    },
    {
        name: 'Xbox Series X',
        slug: 'xbox-series-x',
        image_background: xbox,
        route: '/platforms/xbox-series-x',
    },
    {
        name: 'Nintendo Switch',
        slug: 'nintendo-switch',
        image_background: nintendo,
        route: '/platforms/nintendo-switch',
    },
    {
        name: 'MacOS',
        slug: 'macos',
        image_background: macos,
        route: '/platforms/macos',
    },
    {
        name: 'Linux',
        slug: 'linux',
        image_background: linux,
        route: '/platforms/linux',
    },
]