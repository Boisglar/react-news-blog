import React from 'react';
import PostItem from './PostItem';

export default function PostList({ posts, title, remove }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => {
        return <PostItem post={post} number={index + 1} key={post.id} remove={remove} />;
      })}
    </div>
  );
}
