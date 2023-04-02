import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

export default function PostItem({ post, remove }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
        <div className="post__btns">
          <Link to={`/posts/${post.id}`}>
            <MyButton>Открыть</MyButton>
          </Link>
          <MyButton onClick={() => remove(post)}>удалить</MyButton>
        </div>
      </div>
    </div>
  );
}
