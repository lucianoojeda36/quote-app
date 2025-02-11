'use client';
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Quote App. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 10px;
  background-color: #333;
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
