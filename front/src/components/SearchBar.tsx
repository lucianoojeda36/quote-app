'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useQuoteStore, useSearchStore } from '../store/searchStore';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');

  const setQueryId = useSearchStore((state) => state.setQueryId);
  const { from, to, amount, reset } = useQuoteStore((state) => state);

  const handleSearch = () => {
    if (from || to || amount || search.trim()) {
      reset();
      setQueryId(search.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Buscar por ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <IconButton onClick={handleSearch}>
        <AiOutlineSearch size={20} />
      </IconButton>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 5px;
  width: 280px;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px;
  width: 100%;
  border-radius: 8px;
  padding-right: 40px;
  font-family: Arial, sans-serif;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #77cdcc;
  }
`;

const IconButton = styled.button`
  position: absolute;
  right: 8px;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
