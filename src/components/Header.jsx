import React, { useState } from 'react';
import { loginUser, registerUser} from '../auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      alert("User logged in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit" className="btn btn-outline-light me-2">
        Login
      </button>
    </form>
  );
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      alert("User registered successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit" className="btn btn-warning">
        Sign-up
      </button>
    </form>
  );
};

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {/* Your header content here */}
          
          <div className="text-end">
            <Login />
            <Register />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

