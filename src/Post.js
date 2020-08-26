import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

const Post = ({username, caption, imageURL}) => {

    return (
        <div className = "post">
            <div className = "post__header">
                <Avatar
                className = "post__avatar"
                alt = "Dattu Burle"
                src = "/static/images/avatar/1.pg"
                />
                <h3>{username}</h3>
            </div>
            <img className = "post__image"
                src = {imageURL}
                alt = "Instagram"
            />
            <h4 className = "post__text"><strong>{username} :</strong> {caption}</h4>
        </div>
    );
}

export default Post;

