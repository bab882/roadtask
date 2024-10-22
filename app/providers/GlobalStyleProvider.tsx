"use client";
import React from 'react';
import styled from 'styled-components';

// Création de l'interface
interface Props{
    children: React.ReactNode;
}

function GlobalStyleProvider({ children }: Props) {
  return <GlobalStyles>{children}</GlobalStyles>;
}

const GlobalStyles = styled.div`
    display: flex;
    padding: 2.5rem;
    height: 100%;
    gap: 2.5rem;

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
`;
export default GlobalStyleProvider;
