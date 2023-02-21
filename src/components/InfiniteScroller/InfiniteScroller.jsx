import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../store/actions/games';

const InfiniteScroller = ({ data, children, hasMore }) => {
    const [page, setPage] = useState(2);
    const queryParams = useSelector(state => state.urlParams);
    const dispatch = useDispatch();

    const getMoreItems = () => {
        dispatch({
            type: 'INCREMENT_PAGE',
        })
    }

    return (
        <InfiniteScroll style={{ overflow: 'unset' }} dataLength={data.length} loader={<Loader/>} next={getMoreItems}
                        hasMore={hasMore}>
            {children}
        </InfiniteScroll>
    );
};

export default InfiniteScroller;
