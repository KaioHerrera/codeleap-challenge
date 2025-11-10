import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DeleteForever, EditSquare } from '@mui/icons-material';
import Button from '../common/Button';
// import './PostCard.css';

const formatarData = (data) => {
  return formatDistanceToNow(new Date(data), {
    addSuffix: true,
    locale: ptBR,
  });
};

export default function PostCard({ post, userName, onEdit, onDelete }) {
  const isOwner = post.username === userName;

  return (
    <div className='post-card'>
      <div className='post-header'>
        <h1>{post.title}</h1>
        {isOwner && (
          <div className='post-actions'>
            <Button variant='ghost' onClick={() => onDelete(post)}>
              <DeleteForever />
            </Button>
            <Button variant='ghost' onClick={() => onEdit(post)}>
              <EditSquare />
            </Button>
          </div>
        )}
      </div>
      <div className='post-info'>
        <div className='post-meta'>
          <span className='post-user'>@{post.username}</span>
          <span className='post-time'>
            {formatarData(post.created_datetime)}
          </span>
        </div>
        <p className='post-content'>{post.content}</p>
      </div>
    </div>
  );
}
