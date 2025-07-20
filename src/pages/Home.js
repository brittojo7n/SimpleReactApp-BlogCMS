import { useState } from 'react';
import PostList from '../components/PostList';

const Home = ({ posts, deletePost }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  
  const handleTagClick = (tag) => {
    setFilteredPosts(posts.filter(post => post.tags.includes(tag)));
  };
  
  const clearFilters = () => {
    setFilteredPosts(posts);
  };

  return (
    <div className="home-page">
      <h1>Latest Posts</h1>
      
      <PostList 
        posts={filteredPosts} 
        onTagClick={handleTagClick}
        deletePost={deletePost}
      />
      
      <button onClick={clearFilters} className="clear-filters">
        Clear Filters
      </button>
    </div>
  );
};

export default Home;