import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../reusable/reusable.module.css';

const DlcList = ({ dlcs }) => {
  return (
    <ul className={styles.listMarkered}>
      {dlcs.map((dlc) => (
        <li>
          <Link className={styles.link} to={`/game/${dlc.slug}`}>
            {dlc.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DlcList;
