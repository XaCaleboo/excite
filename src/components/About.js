import React from 'react';
import styled from 'styled-components';
import { indigo, blue, pink } from '@material-ui/core/colors';
import { Container, Typography, Box } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

const HeroStyled = styled.section`
  display: flex;
  background-color: ${indigo[800]};
  padding-top: 196px;
  padding-bottom: 128px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-image: url('/img/thinking_face.png');
  background-position: 95% center;
  background-size: auto 400px;
  background-repeat: no-repeat;
`;

const MarkedMain = styled.span`
  background-color: ${pink[400]};
`;

const MarkedSec = styled.span`
  background-color: ${blue[400]};
`;

const AboutHero = () => {
  return (
    <HeroStyled id="about">
      <Container fixed>
        <ScrollAnimation
          animateIn="slideInLeft"
          duration={0.5}
          animateOnce
        >
          <Typography variant="h1" style={{color: '#fff'}} gutterBottom>
            Кто мы?
          </Typography>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceInUp"
          duration={0.5}
          delay={500}
          animateOnce
        >
          <Typography variant="h4" style={{color: '#fff'}}>
            <Box fontWeight="fontWeightRegular">
              Мы <MarkedMain>Site Excite!</MarkedMain> Крутые ребята, <br />
              которые знают толк в <MarkedSec>дизайне и IT!</MarkedSec> <br />
              Если ты всё ещё сомневаешься, листай ниже <br />
              и убедись в этом сам :-)
            </Box>
          </Typography>
        </ScrollAnimation>
      </Container>
    </HeroStyled>
  );
};

export default AboutHero;