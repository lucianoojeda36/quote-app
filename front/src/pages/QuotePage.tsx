'use client';
import React from 'react';
import styled from 'styled-components';
import QuoteForm from '@/components/QuoteForm';
import SearchResults from '@/components/SearchResults';

export default function QuotesPage() {
  return (
    <Container>
      <HalfContainer>
        <QuoteForm />
      </HalfContainer>
      <HalfContainer>
        <SearchResults />
      </HalfContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 20px;
  padding-top: 150px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const HalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 48%;
  }
`;
