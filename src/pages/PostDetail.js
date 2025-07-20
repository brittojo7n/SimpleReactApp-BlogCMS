import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  
  if (!post) {
    return <div className="post-detail">Post not found</div>;
  }
  
  // date formatting
  const formattedDate = new Date(post.date).toLocaleDateString();
  
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
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