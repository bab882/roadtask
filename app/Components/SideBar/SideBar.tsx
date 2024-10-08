"use client";
import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';

function SideBar() {
  const { theme } = useGlobalState();

  console.log(theme);
  return <SideBarStyled>SideBar</SideBarStyled>;
}

const SideBarStyled = styled.nav`
   background-color:blue;
   height: 10px;
`;
export default SideBar
