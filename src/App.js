import { useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Home';
import CreatePostPage from './pages/CreatePost';
import PostDetailPage from './pages/PostDetail';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [posts, setPosts] = useLocalStorage('blogPosts', [
  ]);

  const addPost = useCallback((newPost) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  }, [setPosts]);

  const deletePost = useCallback((postId) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  }, [setPosts]); 

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage posts={posts} deletePost={deletePost} />} 
            />
            <Route 
              path="/create" 
              element={<CreatePostPage addPost={addPost} />} 
            />
            <Route 
              path="/blog/:id" 
              element={<PostDetailPage posts={posts} deletePost={deletePost} />} 
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;