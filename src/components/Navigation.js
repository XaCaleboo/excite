import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ListStyled = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItemStyled = styled.li`
  display: block;
  padding-left: 4px;
  padding-right: 4px;
`;

const ButtonStyled = styled(Button)`
  color: #fff !important;
`

const Navigation = () => (
  <nav>
    <ListStyled>
      <ListItemStyled>
        <ButtonStyled component={AnchorLink} color="secondary" href="#about">О нас</ButtonStyled>
      </ListItemStyled>
      <ListItemStyled>
        <ButtonStyled component={AnchorLink} color="secondary" href="#services">Услуги</ButtonStyled>
      </ListItemStyled>
      <ListItemStyled>
        <ButtonStyled component={AnchorLink} color="secondary" href="#portfolio">Портфолио</ButtonStyled>
      </ListItemStyled>
      <ListItemStyled>
        <ButtonStyled component={AnchorLink} color="secondary" href="#contacts">Контакты</ButtonStyled>
      </ListItemStyled>
    </ListStyled>
  </nav>
);

export default Navigation;