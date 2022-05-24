import React from 'react';
import { Link } from 'react-router-dom';
import reusableStyles from '../../reusable/reusable.module.css';

const DlcList = ({dlcs}) => {
    return (
        <ul className={reusableStyles.listMarkered}>
            {dlcs.map((dlc) => (
                <li key={dlc.id}>
                    <Link className={reusableStyles.link} to={`/game/${dlc.slug}`}>
                        {dlc.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DlcList;
