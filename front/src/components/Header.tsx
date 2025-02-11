'use client';
import React from 'react';
import styled from 'styled-components';
import { Logo } from './navigation/Logo';

import SearchBar from './SearchBar';
import SessionButton from './navigation/SessionButton';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <SearchBar />
        <SessionButton />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
