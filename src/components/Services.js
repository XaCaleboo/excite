import React from 'react';
import styled from 'styled-components';
import { Typography, Container, Box } from '@material-ui/core';


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
      <Typography variant="h2" color="primary" align="right" gutterBottom>
        Чем занимаемся?
      </Typography>
      <Typography variant="h4" align="right">
        <Box fontWeight="fontWeightRegular">
          <ul style={{ direction: 'rtl' }}>
            <li>Контент</li>
            <li>Дизайн</li>
            <li>Разработка</li>
            <li>Сопровождение</li>
            <li>SEO</li>
          </ul>
        </Box>
      </Typography>
    </Container>
  </HeroStyled>
);

export default Services;