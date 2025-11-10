import { useState } from 'react';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';
import './Home.css';

export default function Home({ onLogin }) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!name.trim()) return;

    setLoading(true);

    setTimeout(() => {
      onLogin(name);
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className='login-container'>
      <h1 className='login-title'>Welcome to CodeLeap network!</h1>
      <p className='login-subtitle'>Please enter your username</p>

      <FormInput
        variant='login'
        type='text'
        placeholder='Username'
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
        onKeyDown={handleKeyDown}
      />

      <Button
        variant='login'
        disabled={!name.trim()}
        isLoading={loading}
        onClick={handleSend}
      >
        ENTER
      </Button>

      {loading && <div className='login-progress-bar' />}
    </div>
  );
}
