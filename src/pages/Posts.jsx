import { useEffect, useRef, useState } from 'react';
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
import { useObserver } from '../hooks/useObserver';
import MySelect from '../component/UI/select/MySelect';

function Posts() {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);
  const [fetchPosts, isLoadingPosts, errorPosts] = useFetching(async () => {
    const response = await PostServise.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount, limit));
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  useObserver(lastElement, page < totalPages, isLoadingPosts, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

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
      <MySelect
        value={limit}
        onChange={(limit) => setLimit(limit)}
        defaultValue="Кол-во Элиментов на странице"
        options={[
          { value: 10, name: '10' },
          { value: 15, name: '15' },
          { value: 30, name: '30' },
          { value: -1, name: 'Показать все' },
        ]}
      />
      {errorPosts && <h1>Произошла ошибка {errorPosts.massege}</h1>}
      <PostList posts={sortedAndSearchedPosts} remove={removePost} title={'Posts'} />
      <div ref={lastElement} style={{ height: '20px', background: 'red' }}></div>
      {isLoadingPosts && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '60px' }}>
          <LoaderG />
        </div>
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
