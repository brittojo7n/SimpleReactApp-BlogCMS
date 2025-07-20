import { Link } from 'react-router-dom';
import TagBadge from './TagBadge';

const PostPreview = ({ post, onDelete }) => {
  const wordCount = post.content.split(/\s+/).filter(Boolean).length; // word count
  const formattedDate = new Date(post.date).toLocaleDateString(); // date formatting

  return (
    <div className="post-preview">
      <div className="post-header">
        <Link to={`/blog/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <button 
          onClick={() => onDelete(post.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
      <p className="post-meta">
        {formattedDate} • {wordCount} words
      </p>
      <div className="tag-container">
        {post.tags.map(tag => (
          <TagBadge key={tag} tag={tag} onClick={() => {}} />
        ))}
      </div>
      <p className="post-excerpt">{post.excerpt}</p>
    </div>
  );
};

export default PostPreview;