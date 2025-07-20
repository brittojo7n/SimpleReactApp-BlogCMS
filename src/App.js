import { useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [posts, setPosts] = useLocalStorage('blogPosts', []);

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
              element={<Home posts={posts} deletePost={deletePost} />} 
            />
            <Route 
              path="/create" 
              element={<CreatePost addPost={addPost} />} 
            />
            <Route 
              path="/blog/:id" 
              element={<PostDetail posts={posts} deletePost={deletePost} />} 
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;