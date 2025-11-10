import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import EditModal from './modals/EditModal';
import DeleteModal from './modals/DeleteModal';
import PostCard from './cards/PostCard';
import CreatePost from './cards/CreatePost';
import axios_instance from '../services/api';
import './Feed.css';

export default function Feed({ userName }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios_instance.get('careers/');
      setPosts(response.data || []);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
    setLoading(false);
  };

  const handleEdit = (post) => {
    setSelectedPost(post);
    setShowEditModal(true);
  };

  const handleDelete = (post) => {
    setSelectedPost(post);
    setShowDeleteModal(true);
  };

  const handleCloseModals = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
    setSelectedPost(null);
  };

  const handleSaveEdit = async (newTitle, newContent) => {
    await axios_instance.patch(`careers/${selectedPost.id}/`, {
      title: newTitle,
      content: newContent,
    });
    handleCloseModals();
    fetchPosts();
  };

  const handleDeletePost = async () => {
    await axios_instance.delete(`careers/${selectedPost.id}/`);
    handleCloseModals();
    fetchPosts();
  };

  return (
    <div className='feed-wrapper'>
      <div className='feed-header'>
        <h1>CodeLeap Network</h1>
      </div>
      <div className='feed-container'>
        <CreatePost userName={userName} onPostCreated={fetchPosts} />

        <div className='posts-list'>
          {loading ? (
            <div className='loading-spinner'>
              <CircularProgress />
            </div>
          ) : (
            posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                userName={userName}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>

      <EditModal
        isOpen={showEditModal}
        onClose={handleCloseModals}
        post={selectedPost}
        onSave={handleSaveEdit}
      />

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={handleCloseModals}
        onDelete={handleDeletePost}
      />
    </div>
  );
}
