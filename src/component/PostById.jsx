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
  }, []);

  if (postError) {
    return <h3>{postError}</h3>;
  }
  return (
    <div>
      {isLoading ? (
        <LoaderG />
      ) : (
        <div className="fullPost">
          <h5>{post.title}</h5>
          <div>{post.body}</div>
        </div>
      )}
      <div>
        <h2>Коменты:</h2>

        {comments.map((comm) => {
          return (
            <div key={comm.id} style={{ margin: '30px' }}>
              <h3>{comm.email}</h3>
              <div>{comm.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostById;
