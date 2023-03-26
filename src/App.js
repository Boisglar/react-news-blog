import { useState } from 'react';
import PostList from './component/PostList';
import '../src/style/App.css';
import MyButton from './component/UI/button/MyButton';
import MyInput from './component/UI/input/MyInput';
function App() {
  const [post, setPost] = useState({ title: '', body: '' });

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript2', body: 'Description' },
    { id: 3, title: 'JavaScript3', body: 'Description' },
  ]);

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: posts.length + 1 }]);
    setPost({ title: '', body: '' });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          type="text"
          placeholder="текст поста"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
      <PostList posts={posts} title={'первый'} />
    </div>
  );
}

export default App;
