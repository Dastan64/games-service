import React from 'react';
import Card from '../Card/Card';
import reusableStyles from '../../reusable/reusable.module.css';

const CardsList = ({data, route, type}) => {
    return (
        <ul className={reusableStyles.grid}>
            {data.map(item => <Card obj={item} data={data} key={item.id} route={route} type={type}/>)}
        </ul>
    );
};

export default CardsList;