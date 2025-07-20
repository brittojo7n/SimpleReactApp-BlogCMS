import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const PostDetail = ({ posts, deletePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);
  
  const handleDelete = () => {
    deletePost(id);
    navigate('/');
  };
  
  if (!post) {
    return <div className="post-detail">Post not found</div>;
  }
  
  // date formatting
  const formattedDate = new Date(post.date).toLocaleDateString();
  
  return (
    <div className="post-detail">
      <div className="post-header">
        <h1>{post.title}</h1>
        <button 
          onClick={handleDelete}
          className="delete-button"
        >
          Delete Post
        </button>
      </div>
      <p className="post-meta">
        Published on {formattedDate}
      </p>
      
      <div className="tag-container">
        {post.tags.map(tag => (
          <span key={tag} className="tag-badge">{tag}</span>
        ))}
      </div>
      
      <div className="post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostDetail;