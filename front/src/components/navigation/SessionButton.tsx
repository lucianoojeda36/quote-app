'use client';
import Link from 'next/link';
import { useLogoutAuth } from '@/api/logoutAuth';
import React, { useState } from 'react';
import styled from 'styled-components';

const SessionButton: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const logout = useLogoutAuth();

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated && (
        <Link href="/login" passHref>
          <StyledButton onClick={handleLogout}>Cerrar sesión</StyledButton>
        </Link>
      )}
    </>
  );
};

const StyledButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c12e2a;
  }

  &:focus {
    outline: none;
  }
`;

export default SessionButton;
