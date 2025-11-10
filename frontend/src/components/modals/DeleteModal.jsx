import Modal from './Modal';
import Button from '../common/Button';
import './Modal.css';

export default function DeleteModal({ isOpen, onClose, onDelete }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className='modal-title delete'>
        Are you sure you want to delete this item?
      </h3>

      <div className='modal-actions'>
        <Button variant='cancel' onClick={onClose}>
          Cancel
        </Button>
        <Button variant='delete' onClick={onDelete}>
          Delete
        </Button>
      </div>
    </Modal>
  );
}
