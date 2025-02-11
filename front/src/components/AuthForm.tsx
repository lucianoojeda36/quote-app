import { useState } from 'react';
import axios from 'axios';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

interface AuthFormProps {
  onAuth: (userData: { access_token: string; user: { email: string } }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onAuth }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = isLogin
        ? await axios.post(`${NEXT_PUBLIC_API_URL}/auth/login`, {
            email,
            password,
          })
        : await axios.post(`${NEXT_PUBLIC_API_URL}/auth/register`, {
            email,
            password,
          });
      onAuth(response.data);
    } catch (err) {
      setError(`Authentication failed :${err}`);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
      </p>
    </div>
  );
};

export default AuthForm;
