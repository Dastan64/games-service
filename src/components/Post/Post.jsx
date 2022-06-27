import React from 'react';
import styled from './Post.module.css';
import { formatDate } from '../../utils/formatDate';

const Post = ({post}) => {
    const {name, image, url, username, created} = post ?? {};
    return (
        <article className={styled.post}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className={styled.postContainer}>
                    {image && <div className={styled.postPreviewContainer} style={{backgroundImage: `url(${image})`}}>
                    </div>}
                    <h4 className={styled.postTitle}>{name}</h4>
                </div>
            </a>
            <div className={styled.postInfo}>
                <span>{formatDate(created)}</span><span>•</span><span>{username.replace('/u/', '')}</span>
            </div>
        </article>
    );
};

export default Post;