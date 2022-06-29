import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../Loader/Loader';
import { useDispatch } from 'react-redux';

const InfiniteScroller = ({ data, callback, children, hasMore }) => {
    const [page, setPage] = useState(2);
    const dispatch = useDispatch();

    const getMoreItems = () => {
        dispatch(callback(page));
        setPage(prev => prev + 1);
    }

    return (
        <InfiniteScroll dataLength={data.length} loader={<Loader/>} next={getMoreItems}
                        hasMore={hasMore}>
            {children}
        </InfiniteScroll>
    );
};

export default InfiniteScroller;