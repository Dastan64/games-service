import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../Loader/Loader';
import { useDispatch } from 'react-redux';
import CardsList from '../CardsList/CardsList';

const InfiniteScroller = ({ data, callback, type, hasMore }) => {
    const [page, setPage] = useState(2);
    const dispatch = useDispatch();

    const getMoreItems = () => {
        dispatch(callback(page));
        setPage(prev => prev + 1);
    }

    return (
        <InfiniteScroll dataLength={data.length} loader={<Loader/>} next={getMoreItems}
                        hasMore={hasMore}>
            <CardsList data={data} type={type} route={`/${type}`}/>
        </InfiniteScroll>
    );
};

export default InfiniteScroller;