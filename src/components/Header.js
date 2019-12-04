import React from 'react';
import styled from 'styled-components';
import { Container, Link } from '@material-ui/core';
import Navigation from './Navigation';


const HeaderStyled = styled.header`
  position: absolute;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  min-height: 132px;
`;

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoStyled = styled.img.attrs(() => ({
  src: 'img/logo_dark.png',
}))`
  height: 100px;
`;

const Header = () => (
  <HeaderStyled>
    <ContainerStyled fixed>
      <Link href="/">
        <LogoStyled />
      </Link>
      <Navigation />   
    </ContainerStyled>
  </HeaderStyled>
);

export default Header;