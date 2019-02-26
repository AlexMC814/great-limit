import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ _id, title, comments }) => {
    return (
        <li>
            <Link to={`/videos/${_id}`}><h4>{title}</h4></Link>
            <p>Комментарии: {comments}</p>
        </li>
    )
}

export default SearchItem
