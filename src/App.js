import '../src/style/App.css';
import PostForm from './component/PostForm';
import { useEffect, useState } from 'react';
import PostFilter from './component/PostFilter';
import PostList from './component/PostList';
import MyModal from './component/UI/myModal/MyModal';
import MyButton from './component/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
function App() {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

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
