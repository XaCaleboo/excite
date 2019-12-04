import React from 'react';
import styled from 'styled-components';
import { Typography, Container, Box } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';


const HeroStyled = styled.section`
  display: flex;
  padding-top: 128px;
  padding-bottom: 64px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-image: url('/img/i_mac.png');
  background-position: 5% center;
  background-size: auto 400px;
  background-repeat: no-repeat;
`;

const Services = () => (
  <HeroStyled id="services">
    <Container fixed>
      <ScrollAnimation
        animateIn="fadeInUp"
        duration={0.5}
        animateOnce
      >
        <Typography variant="h2" color="primary" align="right" gutterBottom>
          Чем занимаемся?
        </Typography>
      </ScrollAnimation>
      <Typography variant="h4" align="right">
        <Box fontWeight="fontWeightRegular">
          <ul style={{ direction: 'rtl' }}>
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={0.5}
              delay={500}
              animateOnce
            >
              <li>Контент</li>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={0.5}
              delay={600}
              animateOnce
            >
              <li>Дизайн</li>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={0.5}
              delay={700}
              animateOnce
            >
              <li>Разработка</li>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={0.5}
              delay={800}
              animateOnce
            >
              <li>Сопровождение</li>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={0.5}
              delay={900}
              animateOnce
            >
              <li>SEO</li>
            </ScrollAnimation>
          </ul>
        </Box>
      </Typography>
    </Container>
  </HeroStyled>
);

export default Services;