import React from 'react';
import styled from 'styled-components';
import { Typography, Container, Icon, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'; 
import { indigo } from '@material-ui/core/colors';


const FooterStyled = styled.section`
  display: flex;
  padding-top: 128px;
  padding-bottom: 64px;
  background-color: ${indigo[800]}
`;

const IconStyled = withStyles(theme => ({
  root: {
    verticalAlign: 'text-bottom',
    fontSize: '1.1em',
  }
}))(Icon);

const Footer = () => (
  <FooterStyled>
    <Container fixed>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="caption" component="p" style={{ color: '#fff' }} gutterBottom>
            Сделали:<br />
            Туманова Анастасия<br />
            Костина Елизавета 
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ color: '#fff' }} align="right" gutterBottom>
            +7 (800) 555-35-35 <IconStyled>phone</IconStyled>
          </Typography>
          <Typography style={{ color: '#fff' }} align="right" gutterBottom>
            example@gmail.com <IconStyled>mail</IconStyled>
          </Typography>
          <Typography style={{ color: '#fff' }} align="right" gutterBottom>
            г. Москва, ул. Пушкина, дом Колотушкина <IconStyled>home</IconStyled>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </FooterStyled>
);

export default Footer;