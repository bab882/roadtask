"use client";
import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';
import Image from 'next/image';
import menu from "@/app/utils/menu";
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";

function SideBar() {

  const { theme } = useGlobalState();

  const router = useRouter(); 
  const pathname = usePathname();
  const handleClick = (link:string) => {
    router.push(link);
  };

  return <SideBarStyled theme={theme}>
    <div className="profil">
      <div className="profil-overlay"></div>
      <div className="image">
        <Image width={70} height={70} src="/avatar.jpg" alt='profil' />
      </div>
      <h2>
        <span>Emma</span>
        <span>Doe</span>
      </h2>
    </div>
    <ul className="nav-items">
      {menu.map((item) => {
        const link = item.link;
        return (
          <li className={`nav-item ${pathname === link ? "active" : ""}`} onClick={() => {
            handleClick(link);
          }}>
            {item.icon}
            <Link href={link}>{item.title}</Link>
          </li>
        ); 
      })}
    </ul>
    <button>ffee</button>
  </SideBarStyled>;
}

const SideBarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;

  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  color: ${(props)=> props.theme.colorGrey3};

  .profil {
    display: flex;
    align-items: center;
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    position: relative;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 500px;
    color: ${(props) => props.theme.colorGrey0};
  }
  
  .profil-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: 0;
    background: ${(props) => props.theme.colorBg3};
    transition: all 10s linear;
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
    opacity: 0.2;
  }
  
  h2 {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;
export default SideBar
