import React from 'react';

const CommentItem = props => {
  return (
    <li>
      <div>
        <span>Опубликовано: {props.user} </span>
        <span>{props.date}</span>
      </div>
      <p>{props.comment}</p>
    </li>
  );
};

export default CommentItem;
