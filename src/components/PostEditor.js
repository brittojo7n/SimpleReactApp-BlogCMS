import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import TagBadge from './TagBadge';

const PostEditor = ({ post, onSave }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [tags, setTags] = useState(post?.tags?.join(', ') || '');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // parse tags from comma-separated string
    const parsedTags = tags.split(',').map(tag => tag.trim()).filter(Boolean);
    
    onSave({
      title,
      content,
      tags: parsedTags,
      date: new Date().toISOString(),
      excerpt: content.substring(0, 100) + '...'
    });
  };

  return (
    <div className="editor-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Tags (comma separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <div className="tag-preview">
            {tags.split(',').map(tag => tag.trim()).filter(Boolean).map(tag => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </div>
        
        <div className="editor-columns">
          <div className="editor-column">
            <label style={{display: 'block'}}>Content (Markdown)</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              required
            />
          </div>
          
          <div className="editor-column">
            <label>Preview</label>
            <div className="preview-content">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </div>
        
        <button type="submit" className="save-button">
          {post?.id ? 'Update Post' : 'Publish Post'}
        </button>
      </form>
    </div>
  );
};

export default PostEditor;