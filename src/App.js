import PostList from './component/PostList';
import '../src/style/App.css';
import PostForm from './component/PostForm';
import { useState } from 'react';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript2', body: 'Description' },
    { id: 3, title: 'JavaScript3', body: 'Description' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} setPosts={setPosts} />
      {posts.length ? (
        <PostList posts={posts} remove={removePost} title={'первый'} />
      ) : (
        <h3>Посты не найдены</h3>
      )}
    </div>
  );
}

export default App;
