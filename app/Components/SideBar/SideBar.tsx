"use client";
import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';

function SideBar() {

  const { theme } = useGlobalState();
  // console.log(theme);
  return <SideBarStyled theme={theme}>SideBar</SideBarStyled>;
}

const SideBarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border-right: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
`;
export default SideBar
