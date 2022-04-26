import React from 'react';

import styles from "./Loader.module.css";
import spinningCircles from "../../assets/images/spinning-circles.svg";

const Loader = () => {
    return (
        <img className={styles.loader} src={spinningCircles} alt=""/>
    );
};

export default Loader;