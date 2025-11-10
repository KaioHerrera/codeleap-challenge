import { useState } from 'react';
import axios_instance from '../../services/api';
import Button from '../common/Button';
import FormInput from '../common/FormInput';
import FormTextarea from '../common/FormTextarea';
// import './CreatePost.css';

export default function CreatePost({ userName, onPostCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreatePost = async () => {
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    try {
      await axios_instance.post('careers/', {
        username: userName,
        title,
        content,
      });

      setTimeout(() => {
        setTitle('');
        setContent('');
        setIsSubmitting(false);
        onPostCreated();
      }, 2000);
    } catch (error) {
      console.error('Erro ao criar post:', error);
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCreatePost();
    }
  };

  return (
    <div className='create-post'>
      <h2>What's on your mind?</h2>

      <label className='post-label'>Title</label>
      <FormInput
        variant='post'
        type='text'
        placeholder='Hello world'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isSubmitting}
      />

      <label className='post-label'>Content</label>
      <FormTextarea
        variant='post'
        placeholder='Content here'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        onKeyDown={handleKeyDown}
        disabled={isSubmitting}
      />

      <Button
        variant='post'
        onClick={handleCreatePost}
        disabled={!title.trim() || !content.trim()}
        isLoading={isSubmitting}
      >
        Create
      </Button>
      {isSubmitting && <div className='post-progress-bar'></div>}
    </div>
  );
}
