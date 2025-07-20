import { Link } from 'react-router-dom';
import TagBadge from './TagBadge';

const PostPreview = ({ post }) => {
  // word count
  const wordCount = post.content.split(/\s+/).filter(Boolean).length;
  
  // date formatting
  const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <div className="post-preview">
      <Link to={`/blog/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
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