import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import CardsList from '../../components/CardsList/CardsList';

const Tags = () => {
    const tags = useSelector(state => state.tags.tags);
    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Tags</h1>
            {tags.length > 0 && <CardsList data={tags} route={'/tags'} type={'tag'}/>}
        </section>
    );
};

export default Tags;