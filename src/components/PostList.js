import { useState } from 'react';
import PostPreview from './PostPreview';

const PostList = ({ posts, onTagClick, deletePost }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  return (
    <div className="post-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search posts by title or tag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="all-tags">
        <h4>Filter by Tag:</h4>
        <div className="tag-container">
          {[...new Set(posts.flatMap(post => post.tags))].map(tag => (
            <button 
              key={tag} 
              className="tag-filter"
              onClick={() => onTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div className="posts-grid">
        {filteredPosts.map(post => (
          <PostPreview 
            key={post.id} 
            post={post} 
            onDelete={deletePost}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;