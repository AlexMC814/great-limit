import React from 'react';
import { Link } from 'react-router-dom';


const formatDate = date => {
    const newDate = new Date(date).toLocaleDateString('ru-RU');
    return newDate;
}

const UserInfo = ({ session }) => {
    return (
        <div>
            <h3>Информация о пользователе</h3>
            <p>{session.getCurrentUser.userName}</p>
            <p>{session.getCurrentUser.email}</p>
            <p>{formatDate(session.getCurrentUser.joinDate)}</p>
            <p>Комментарии {session.getCurrentUser.userName}а</p>
            <ul>
                {session.getCurrentUser.comments.map(comment => {
                    return <Link to={`/videos/${comment._id}`}><li key={comment._id}>{comment.title}</li></Link>
                })}
                {!session.getCurrentUser.comments.length &&
                    (<p><strong>У видео пока нет комментариев.</strong></p>)
                }
            </ul>
        </div>
    )
}

export default UserInfo;
