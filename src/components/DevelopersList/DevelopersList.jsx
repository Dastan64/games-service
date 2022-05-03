import React from 'react';
import DeveloperCard from "../DeveloperCard/DeveloperCard";

const DevelopersList = ({developers}) => {
    return (
        <ul className="grid">
            {developers.map(developer => <DeveloperCard
                developer={developer} key={developer.id}/>)}
        </ul>
    );
};

export default DevelopersList;