import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel'
import { indigo } from '@material-ui/core/colors';
import { Typography, Container } from '@material-ui/core';


const HeroStyled = styled.section`
  display: flex;
  background-color: ${indigo[800]};
  padding-top: 128px;
  padding-bottom: 64px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const MockupStyled = styled.img`
  width: 100%;
  box-shadow: 4px 4px 16px 8px rgba(0, 0, 0, 0.3);
`;

const CarouselStyled = styled(Carousel)`
  margin: 64px auto 0;
  width: 80%;
`;

const Portfolio = () => (
  <HeroStyled id="portfolio">
    <Container fixed>
      <Typography variant="h2" style={{color: '#fff'}} align="center" gutterBottom>
        Смотри как умеем!
      </Typography>
      <CarouselStyled animation="slide">
        <MockupStyled src="/img/zeus.png"/>
        <MockupStyled src="/img/apple.png"/>
        <MockupStyled src="/img/swarovski.png"/>
      </CarouselStyled>
    </Container>
  </HeroStyled>
);

export default Portfolio;