import { useState, type FormEvent } from 'react';
import styled from 'styled-components';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

interface AuthModalProps {
  onLogin: (e: FormEvent<HTMLFormElement>) => void;
  onRegister: (e: FormEvent<HTMLFormElement>) => void;
}

export const AuthModal = ({ onLogin, onRegister }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Welcome to Quote App</ModalHeader>
        <TabContainer>
          <TabButton
            active={activeTab === 'login'}
            onClick={() => setActiveTab('login')}
          >
            Login
          </TabButton>
          <TabButton
            active={activeTab === 'register'}
            onClick={() => setActiveTab('register')}
          >
            Register
          </TabButton>
        </TabContainer>
        {activeTab === 'login' ? (
          <LoginForm onSubmit={onLogin} />
        ) : (
          <RegisterForm onSubmit={onRegister} />
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 350px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 10px;
  border: none;
  cursor: pointer;
  background: ${({ active }) => (active ? '#007bff' : '#ddd')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  border-radius: 4px;

  &:hover {
    background: ${({ active }) => (active ? '#0056b3' : '#ccc')};
  }
`;
