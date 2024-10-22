"use client";
import { useGlobalState } from '@/app/context/globalProvider';
import React from 'react';
import styled from 'styled-components';

interface Props  {
  content: React.ReactNode;
}

function Modal({ content }) : Props {

  const { closeModal } = useGlobalState();

  return (
    <ModalStyled>
      <div className="modal-overlay" onClick={closeModal}></div>
      {content}
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-overlay {
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.45);
    
    position: absolute;
    filter: blur(4px);
  }

  .modal-content {
    padding: 2rem;
    position: relative;
    max-width: 630px;
    z-index: 100px;
    background: red;
  }
`;

export default Modal;
