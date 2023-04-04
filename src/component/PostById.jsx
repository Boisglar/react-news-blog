import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostServise from '../api/PostServise';
import useFetching from '../hooks/useFetching';
import LoaderG from './UI/loader/LoaderG';

const PostById = () => {
  const [post, setPost] = useState({});
  const [comments, setCommets] = useState([]);
  const params = useParams();

  const [FetchPostById, isLoading, postError] = useFetching(async () => {
    const response = await PostServise.getById(params.id);
    setPost(response.data);
  });

  const [fetchCommets] = useFetching(async () => {
    const response = await PostServise.getCommentsByPostId(params.id);
    setCommets(response.data);
  });

  useEffect(() => {
    FetchPostById();
    fetchCommets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (postError) {
    return <h3>{postError}</h3>;
  }
  return (
    <div>
      {isLoading ? (
        <LoaderG />
      ) : (
        <div className="fullPost">
          <h2>{post.title}</h2>
          <div>{post.body}</div>
        </div>
      )}
      <div className="comments">
        <h2>Коменты:</h2>

        {comments.map((comm) => {
          return (
            <div key={comm.id} className="post-comment">
              <h4>{comm.email}</h4>
              <div>{comm.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostById;
