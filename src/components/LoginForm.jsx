import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      'Project-ID': '0ca38c3d-40b0-42c6-b063-e0a97857d057',
      'User-Name': username,
      'User-Secret': password
    };

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject
      });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (error) {
      setError('Oops, Incorrect credentials!');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Join Chat</span>
            </button>
          </div>
        </form>

        <h3 style={{ textAlign: 'center', marginTop: '10px', color: '#222'}}>Please use this account to login</h3>
        <h5 style={{ textAlign: 'center', marginTop: '10px', color: '#222'}}>Account: guest, password: guest</h5>
        <h2 style={{ textAlign: 'center', marginTop: '15px', color: '#520'}}>{error}</h2>
      </div>
    </div>
  );
};

export default LoginForm;
