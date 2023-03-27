import PostList from './component/PostList';
import '../src/style/App.css';
import PostForm from './component/PostForm';
import { useState } from 'react';
import MySelect from './component/UI/select/MySelect';
function App() {
  const [selectedSort, setSelectedSort] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'deck' },
    { id: 2, title: 'css', body: 'ask' },
    { id: 3, title: 'html', body: 'inc' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    //функция для сортировки массива
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} setPosts={setPosts} />
      <hr style={{ margin: '15px 0' }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue={'Сортировка по:'}
        options={[
          { value: 'title', name: 'По нозванию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
      {posts.length ? (
        <PostList posts={posts} remove={removePost} title={'Posts'} />
      ) : (
        <h3>Посты не найдены</h3>
      )}
    </div>
  );
}

export default App;
