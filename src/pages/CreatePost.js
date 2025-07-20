import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostEditor from '../components/PostEditor';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CreatePost = ({ addPost }) => {
  const navigate = useNavigate();
  const [draft, setDraft] = useLocalStorage('postDraft', null);
  
  const handleSave = (post) => {
    addPost({
      ...post,
      id: Date.now().toString()
    });
    
    // clear draft after saving
    localStorage.removeItem('postDraft');
    navigate('/');
  };
  
  // autosave draft every 2 seconds
  useEffect(() => {
    const autosave = setInterval(() => {
      if (draft) {
        setDraft(draft);
      }
    }, 2000);
    
    return () => clearInterval(autosave);
  }, [draft, setDraft]);

  return (
    <div className="create-page">
      <h1>Create New Post</h1>
      <p className="autosave-note">Drafts are autosaved every 2 seconds</p>
      
      <PostEditor 
        post={draft || {}} 
        onSave={handleSave} 
      />
    </div>
  );
};

export default CreatePost;