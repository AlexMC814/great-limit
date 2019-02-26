import React from 'react';
import { Link } from 'react-router-dom';

const VideoItem = ({ _id, title, category, description, userName }) => {
    return (
        <li>
            <Link to={`/videos/${_id}`}><h4>{title}</h4></Link>
            <p><strong>{category}</strong></p>
            <p><strong>{description}</strong></p>
            <small>{userName}</small>
        </li>
    )
}

export default VideoItem;
