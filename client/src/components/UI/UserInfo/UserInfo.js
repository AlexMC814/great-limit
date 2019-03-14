import React from 'react';
// import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const formatDate = date => {
  const newDate = new Date(date).toLocaleDateString('ru-RU');
  return newDate;
};

const UserInfo = ({ session }) => {
  return (
    <div>
      <h3>Информация о пользователе</h3>
      <p>{session.getCurrentUser.userName}</p>
      <p>{session.getCurrentUser.email}</p>
      <p>{formatDate(session.getCurrentUser.joinDate)}</p>
      <p>Вы комментировали: </p>
      <ul>{/* <Comments /> */}</ul>
    </div>
  );
};

export default UserInfo;
