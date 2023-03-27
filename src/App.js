import PostList from './component/PostList';
import '../src/style/App.css';
import PostForm from './component/PostForm';
import { useState } from 'react';
import MySelect from './component/UI/select/MySelect';
import MyInput from './component/UI/input/MyInput';
function App() {
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSerchQuery] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'deck' },
    { id: 2, title: 'css', body: 'ask' },
    { id: 3, title: 'html', body: 'inc' },
  ]);

  function getSortedPost() {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }

  const sortedPost = getSortedPost();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} setPosts={setPosts} />
      <hr style={{ margin: '15px 0' }} />
      <MyInput
        placeholder="Поиск ..."
        value={searchQuery}
        onChange={(e) => setSerchQuery(e.target.value)}
      />
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
        <PostList posts={sortedPost} remove={removePost} title={'Posts'} />
      ) : (
        <h3>Посты не найдены</h3>
      )}
    </div>
  );
}

export default App;
