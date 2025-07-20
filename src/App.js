import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Home';
import CreatePostPage from './pages/CreatePost';
import PostDetailPage from './pages/PostDetail';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [posts, setPosts] = useLocalStorage('blogPosts', [
    {
      id: '1',
      title: 'Welcome to Blog CMS Lite',
      content: 'This is a simple blog CMS built with React. Start by creating your first post!',
      tags: ['welcome', 'tutorial'],
      date: new Date().toISOString(),
      excerpt: 'This is a simple blog CMS built with React...'
    }
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage posts={posts} />} 
            />
            <Route 
              path="/create" 
              element={<CreatePostPage addPost={addPost} />} 
            />
            <Route 
              path="/blog/:id" 
              element={<PostDetailPage posts={posts} />} 
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;