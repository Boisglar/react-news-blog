import { useEffect, useState } from 'react';
import MyButton from '../component/UI/button/MyButton';
import MyModal from '../component/UI/myModal/MyModal';
import PostForm from '../component/PostForm';
import PostList from '../component/PostList';
import PostFilter from '../component/PostFilter';
import LoaderG from '../component/UI/loader/LoaderG';
import Pagination from '../component/UI/pagination/Pagination';
import PostServise from '../api/PostServise';
import useFetching from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/page';

function Posts() {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [fetchPosts, isLoadingPosts, errorPosts] = useFetching(async () => {
    const response = await PostServise.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount, limit));
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

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
      {errorPosts && <h1>Произошла ошибка {errorPosts.massege}</h1>}
      {isLoadingPosts ? (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '60px' }}>
          <LoaderG />
        </div>
      ) : (
        <PostList posts={sortedAndSearchedPosts} remove={removePost} title={'Posts'} />
      )}
      <Pagination totalPages={totalPage} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
