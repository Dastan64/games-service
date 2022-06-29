import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import reusableStyles from '../../reusable/reusable.module.css';

import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller';
import { getDevelopers } from '../../store/actions/developers';
import CardsList from '../../components/CardsList/CardsList';

const Developers = () => {
    const developers = useSelector(state => state.developers.developers);
    const hasMoreDevelopers = useSelector(state => state.developers.hasMore);
    return (
        <section>
            <h1 className={`${reusableStyles.mainHeading} ${reusableStyles.pageHeading}`}>Developers</h1>
            {developers.length > 0 && (
                <InfiniteScroller data={developers} callback={getDevelopers}
                                  hasMore={hasMoreDevelopers}>
                    <CardsList data={developers} type={'developers'} route={'developers'}/>
                </InfiniteScroller>
            )
            }
        </section>
    );
};

export default Developers;