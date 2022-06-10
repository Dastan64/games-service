import React from 'react';
import styled from './PostsList.module.css';
import Post from '../Post/Post';

const PostsList = ({posts}) => {
    return (
        <ul className={styled.postsList}>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </ul>
    );
};

export default PostsList;