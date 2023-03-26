import React from 'react';

export default function PostItem({ post, number }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
        <div className="post__btns">
          <button>удалить</button>
        </div>
      </div>
    </div>
  );
}
