import { useState, useEffect } from 'react';
import Modal from './Modal';
import Button from '../common/Button';
import FormInput from '../common/FormInput';
import FormTextarea from '../common/FormTextarea';
import './Modal.css';

export default function EditModal({ isOpen, onClose, onSave, post }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSave = () => {
    onSave(title, content);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className='modal-title'>Edit item</h3>

      <label className='modal-label'>Title</label>
      <FormInput
        variant='modal'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className='modal-label'>Content</label>
      <FormTextarea
        variant='modal'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className='modal-actions'>
        <Button variant='edit-cancel' onClick={onClose}>
          Cancel
        </Button>
        <Button variant='save' onClick={handleSave}>
          Save
        </Button>
      </div>
    </Modal>
  );
}
