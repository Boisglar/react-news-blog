import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

export default function PostItem({ post, remove }) {
  return (
    <div className="post">
      <div className="post__content">
        <h4>
          {post.id}. {post.title}
        </h4>
        <div className="post-body">{post.body}</div>
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
