import '../src/style/App.css';
import PostForm from './component/PostForm';
import { useMemo, useState } from 'react';
import PostFilter from './component/PostFilter';
import PostList from './component/PostList';
import MyModal from './component/UI/myModal/MyModal';
import MyButton from './component/UI/button/MyButton';
function App() {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'deck' },
    { id: 2, title: 'css', body: 'ask' },
    { id: 3, title: 'html', body: 'inc' },
  ]);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} setPosts={setPosts} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      <hr style={{ margin: '15px 0' }} />
      <PostList posts={sortedAndSearchedPosts} remove={removePost} title={'Posts'} />
    </div>
  );
}

export default App;
